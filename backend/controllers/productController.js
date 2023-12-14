const Product = require("../models/productModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const { sendEmail, generateEmailBody } = require("../utils/nodemailer");

const getProduct = catchAsync(async (req, res, next) => {
  const product = await Product.findById(req.params.productId);

  if (!product)
    return next(new AppError("Product with that id does not exist!", 404));

  res.status(200).json({
    status: "success",
    product,
  });
});

const getAllProducts = catchAsync(async (req, res) => {
  const products = await Product.find({ isOutOfStock: { $ne: true } });

  res.status(200).json({
    status: "success",
    results: products.length,
    products,
  });
});

const getSimilarProducts = catchAsync(async (req, res, next) => {
  const currentProduct = await Product.findById(req.params.productId);
  if (!currentProduct)
    return next(new AppError("Product with that id does not exist!", 404));

  const similarProducts = await Product.find({
    _id: { $ne: req.params.productId },
    isOutOfStock: { $ne: true },
  }).limit(3);

  res.status(200).json({
    status: "success",
    similarProducts,
  });
});

const addUserEmailToProduct = catchAsync(async (req, res, next) => {
  const { userEmail, productId } = req.body;

  const product = await Product.findById(productId);

  if (!product)
    return next(new AppError("Product with that ID does not exist!", 404));

  const userExists = product.users.some((user) => user.email === userEmail);

  if (userExists)
    return next(new AppError("User is already tracking this product.", 403));

  product.users.push({ email: userEmail });

  await product.save();

  const emailContent = await generateEmailBody(product, "WELCOME");

  await sendEmail(emailContent, [userEmail]);

  res.status(200).json({
    status: "success",
    message: "Email sent!",
  });
});

module.exports = {
  getAllProducts,
  getProduct,
  getSimilarProducts,
  addUserEmailToProduct,
};
