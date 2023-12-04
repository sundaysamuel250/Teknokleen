const db = require("../../../config/mysql");
const brandQueries = require("../../queries/brand/brand");
class BrandService {
  static async GetBrands() {
    const q = await db.query(brandQueries.getAllBrands);
    console.log("Quering database to select all test");
    return q;
  }
  static async GetBrand(data) {
    const q = await db.query(brandQueries.getBrand(data));
    console.log("Quering database to select all a brand with slug");
    return q;
  }

  static async createBrand(data) {
    console.log("Quering database to create brand");
    const q = await db.query(brandQueries.createBrand(data));
    return q;
  }
}
module.exports = BrandService;
