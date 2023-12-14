const Product = require("../models/productModel");
const catchAsync = require("../utils/catchAsync");
const { scrapeAmazonProduct } = require("../controllers/scraperController");
const AppError = require("../utils/appError");
const {
  getLowestPrice,
  getHighestPrice,
  getAveragePrice,
  getEmailNotifType,
} = require("../utils/helperFunctions");
const { generateEmailBody, sendEmail } = require("../utils/nodemailer");

const cron = catchAsync(async (req, res, next) => {
  const products = await Product.find();

  if (!products || products.length === 0)
    return next(new AppError("No products found", 404));

  const updatedProducts = await Promise.all(
    products.map(async (currentProduct) => {
      try {
        const scrapedProduct = await scrapeAmazonProduct(
          currentProduct.url,
          next
        );

        if (!scrapedProduct)
          return next(new AppError("No product found.", 404));

        const updatedPriceHistory = [
          ...currentProduct.priceHistory,
          { price: scrapedProduct.currentPrice },
        ];

        const product = {
          ...scrapedProduct,
          priceHistory: updatedPriceHistory,
          lowestPrice: getLowestPrice(updatedPriceHistory),
          highestPrice: getHighestPrice(updatedPriceHistory),
          averagePrice: getAveragePrice(updatedPriceHistory),
        };

        const updatedProduct = await Product.findOneAndUpdate(
          { url: product.url },
          product
        );

        const emailNotifType = getEmailNotifType(
          scrapedProduct,
          currentProduct
        );

        if (emailNotifType && updatedProduct.users.length > 0) {
          const productInfo = {
            title: updatedProduct.title,
            url: updatedProduct.url,
          };

          const emailContent = await generateEmailBody(
            productInfo,
            emailNotifType
          );

          const userEmails = updatedProduct.users.map((user) => user.email);

          await sendEmail(emailContent, userEmails);
        }

        return updatedProduct;
      } catch (err) {
        return next(new AppError(err.message, 400));
      }
    })
  );

  res.status(200).json({
    status: "success",
    results: updatedProducts.length,
    updatedProducts,
  });
});

module.exports = { cron };
