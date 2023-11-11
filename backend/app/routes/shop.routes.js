const { Router } = require("express");
const ROUTES = require("./constants.routes.js");
const shopRoutes = Router();
const ShopController = require("../controllers/shop/shopController.js");
const { catchInternalServerError } = require("../middlewares/catchError.js");
shopRoutes.get(
  ROUTES.GET_PRODUCTS,
  catchInternalServerError(ShopController.Products)
);

module.exports = shopRoutes;
