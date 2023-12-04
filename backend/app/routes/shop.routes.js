const { Router } = require("express");
const ROUTES = require("./constants.routes.js");
const shopRoutes = Router();
const ShopController = require("../controllers/shop/shopController.js");
const { catchInternalServerError } = require("../middlewares/catchError.js");
shopRoutes.get(
  ROUTES.GET_PRODUCTS,
  catchInternalServerError(ShopController.Products)
);

shopRoutes.get(
  ROUTES.GET_CATEGORIES,
  catchInternalServerError(ShopController.Categories)
);
shopRoutes.get(
  ROUTES.GET_CATEGORY,
  catchInternalServerError(ShopController.Category)
);

shopRoutes.get(
  ROUTES.GET_BRANDS,
  catchInternalServerError(ShopController.Brands)
);
module.exports = shopRoutes;
