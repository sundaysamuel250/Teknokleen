const db = require("../../../config/mysql");
const categoryQueries = require("../../queries/category/category");
class CategoryService {
  static async GetCategories() {
    console.log("Quering database to get categories");
    const q = await db.query(categoryQueries.GetCategories);
    return q;
  }
  static async GetCategory(data) {
    console.log("Quering database to get categories");
    const q = await db.query(categoryQueries.GetCategory(data));
    return q;
  }
  static async createCategory(data) {
    console.log("Quering database to create  category");
    const q = await db.query(categoryQueries.createCategory(data));
    return q;
  }
}
module.exports = CategoryService;
