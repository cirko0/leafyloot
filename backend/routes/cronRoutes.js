const express = require("express");
const { cron } = require("../controllers/cronController");

const router = express.Router();

router.get("/", cron);

module.exports = router;
