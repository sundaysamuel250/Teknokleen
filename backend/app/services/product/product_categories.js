const db = require("../../../config/mysql");
const pcQueries = require("../../queries/products/product_categories");
class PCService {
  static async CheckExists(data) {
    const q = await db.query(pcQueries.checkExists(data));
    console.log("Quering database to check if pc exists");
    return q;
  }

  static async createPC(data) {
    console.log("Quering database to create product category");
    const q = await db.query(pcQueries.createPC(data));
    return q;
  }

  static async getProductCategories(data) {
    console.log("Quering database to get product category");
    const query = pcQueries.getCategoriesProucts(data);
    const d = await db.query(query);
    return d;
  }
  
  static async getCategoriesProuctsCount(data) {
    console.log("Quering database to get product category");
    const query = pcQueries.getCategoriesProuctsCount(data);
    const d = await db.query(query);
    return d;
  }
  
}
module.exports = PCService;