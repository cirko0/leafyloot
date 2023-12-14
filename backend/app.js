const express = require("express");
const morgan = require("morgan");
const globalErrorHandler = require("./controllers/errorController");
const AppError = require("./utils/appError");
const cronRouter = require("./routes/cronRoutes");
const productRouter = require("./routes/productRoutes");
const cors = require("cors");

const app = express();

app.enable("trust proxy");

app.use(
  cors({
    origin: "https://leafyloot.netlify.app",
    methods: "GET, POST, PUT, DELETE, OPTIONS",
    allowedHeaders: "Content-Type, Authorization",
  })
);

app.use(morgan("dev"));

app.use(express.json());

app.use("/api/v1/products", productRouter);
app.use("/api/v1/cron", cronRouter);

app.all("*", (req, _res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
