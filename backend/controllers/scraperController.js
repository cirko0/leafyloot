const axios = require("axios");
const cheerio = require("cheerio");
const catchAsync = require("../utils/catchAsync.js");
const Product = require("../models/productModel.js");
const AppError = require("../utils/appError");

const {
  extractCurrency,
  extractPrice,
  extractDescription,
  getLowestPrice,
  getHighestPrice,
  getAveragePrice,
} = require("../utils/helperFunctions.js");

const scrapeAmazonProduct = async (url, next) => {
  const username = process.env.BRIGHT_DATA_USERNAME;
  const password = process.env.BRIGHT_DATA_PASSWORD;
  const port = 22225;
  const session_id = (1000000 * Math.random()) | 0;
  const options = {
    auth: {
      username: `${username}-session-${session_id}`,
      password,
    },
    host: "brd.superproxy.io",
    port,
    rejectUnauthorized: false,
  };

  try {
    let html;

    if (url.includes("amazon.com")) {
      const response = await axios.get(
        `https://api.scraperapi.com/?api_key=${process.env.SCRAPER_API_KEY}&url=${url}`
      );

      html = response.data;
    } else {
      const response = await axios.get(url, options);

      if (response.status !== 200 || !response.data) {
        return next(new AppError("Failed to scrape product.", 400));
      }

      html = response.data;
    }

    const $ = cheerio.load(html);

    const title = $("#productTitle").text().trim();

    const image =
      $("#imgBlkFront").attr("data-a-dynamic-image") ||
      $("#landingImage").attr("src");

    const currentPrice = extractPrice(
      $(".priceToPay span.a-price-whole"),
      $("a.size.base.a-color-price"),
      $(".a-button-selected .a-color-base"),
      $(".a-price.a-text-price:eq(1) span:eq(1)")
    );

    const originalPrice = extractPrice(
      $("#priceblock_ourprice"),
      $(".a-price.a-text-price:first span.a-offscreen"),
      $("#listPrice"),
      $("#priceblock_dealprice"),
      $(".a-size-base.a-color-price")
    );

    const isOutOfStock =
      $("#availability span:eq(3)").text().trim().toLowerCase() ===
      "currently unavailable.";

    const currency = extractCurrency($(".a-price-symbol"));

    const discountRate = $('span.a-color-price:contains("%")')
      .first()
      .text()
      .trim()
      .replace(/.*\(([^)]+)\).*/, "$1")
      .replace("%", "")
      .replace("-", "");

    const description = extractDescription($);

    const data = {
      url,
      currency: currency || "$",
      image,
      title,
      currentPrice: Number(currentPrice) || Number(originalPrice),
      originalPrice: Number(originalPrice) || Number(currentPrice),
      priceHistory: [],
      discountRate: Number(discountRate),
      isOutOfStock,
      description,
      lowestPrice: Number(currentPrice) || Number(originalPrice),
      highestPrice: Number(originalPrice) || Number(currentPrice),
      averagePrice: Number(currentPrice) || Number(originalPrice),
    };

    return data;
  } catch (error) {
    return next(new AppError(error.message, 400));
  }
};

const scrapeProductandSave = catchAsync(async (req, res, next) => {
  const { productUrl } = req.body;

  if (!productUrl)
    return next(new AppError("Failed to create/update product!", 403));

  const scrapedProduct = await scrapeAmazonProduct(productUrl, next);

  if (!scrapedProduct) return;

  let product = scrapedProduct;
  const existingProduct = await Product.findOne({ url: scrapedProduct.url });

  if (existingProduct) {
    const updatedPriceHistory = [
      ...existingProduct.priceHistory,
      { price: scrapedProduct.currentPrice },
    ];

    product = {
      ...scrapedProduct,
      priceHistory: updatedPriceHistory,
      lowestPrice: getLowestPrice(updatedPriceHistory),
      highestPrice: getHighestPrice(updatedPriceHistory),
      averagePrice: getAveragePrice(updatedPriceHistory),
    };
  }

  const newProduct = await Product.findOneAndUpdate(
    { url: scrapedProduct.url },
    product,
    { upsert: true, new: true }
  );

  res.status(200).json({
    status: "success",
    newProduct,
  });
});

module.exports = { scrapeAmazonProduct, scrapeProductandSave };
