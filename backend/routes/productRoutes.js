const express = require("express");
const {
  getAllProducts,
  getProduct,
  getSimilarProducts,
  addUserEmailToProduct,
} = require("../controllers/productController");
const { scrapeProductandSave } = require("../controllers/scraperController");

const router = express.Router();

router.get("/", getAllProducts);

router.get("/:productId", getProduct);

router.get("/similar-to/:productId", getSimilarProducts);

router.post("/scrape", scrapeProductandSave);

router.post("/add-email", addUserEmailToProduct);

module.exports = router;
