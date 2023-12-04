const db = require("../../../config/mysql");
const productQueries = require("../../queries/products/product");
class ProductService {
  static async GetProduct(data) {
    console.log(productQueries.getProduct(data))
    const q = await db.query(productQueries.getProduct(data));
    console.log("Quering database to select all test");
    return q;
  }

  static async GetProducts(data) {
  
    const q = await db.query(productQueries.getProducts(data));
    console.log("Quering database to select products");
    return q;
  }
  static async GetProductsCount(data) {
  
    const q = await db.query(productQueries.GetProductsCount(data));
    console.log("Quering database to select products");
    return q;
  }
  
  static async create(data) {
    console.log("Quering database to create  category");
    const query = productQueries.create(data);
    const q = await db.query(query);
    return q;
  }
}
module.exports = ProductService;
