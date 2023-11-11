class ShopController {
  static async Categories(req, res) {}
  static async Products(req, res) {
    res.json("products").status(200);
  }
}
module.exports = ShopController;
