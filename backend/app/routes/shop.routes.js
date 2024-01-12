const { Router } = require("express");
<<<<<<< HEAD
=======
const validateRequestBody = require('../helpers/validateRequestBody');
>>>>>>> origin/shopbe
const ROUTES = require("./constants.routes.js");
const shopRoutes = Router();
const ShopController = require("../controllers/shop/shopController.js");
const { catchInternalServerError } = require("../middlewares/catchError.js");
<<<<<<< HEAD
=======
const { checkoutValidator } = require("../../validators/shop.validators.js");
>>>>>>> origin/shopbe
shopRoutes.get(
  ROUTES.GET_PRODUCTS,
  catchInternalServerError(ShopController.Products)
);
<<<<<<< HEAD
=======
shopRoutes.get(
  ROUTES.GET_PRODUCT,
  catchInternalServerError(ShopController.Product)
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


shopRoutes.post(
  ROUTES.CHECKOUT,
  catchInternalServerError(ShopController.Checkout)
);

>>>>>>> origin/shopbe

module.exports = shopRoutes;
