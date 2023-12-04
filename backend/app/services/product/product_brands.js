const db = require("../../../config/mysql");
const pbQueries = require("../../queries/products/product_brands");
class PBService {
  static async CheckExists(data) {
    const q = await db.query(pbQueries.checkExists(data));
    console.log("Quering database to check if pc exists");
    return q;
  }

  static async createPB(data) {
    console.log("Quering database to create product BRAND");
    db.query(pbQueries.createPB(data))
    .then((d)=> {return d;});
  }

  static async getProductBrand(data) {
    console.log("Quering database to get product category");
    const query = pbQueries.getBrandsProucts(data);
    const d = await db.query(query);
    return d;
  }
  
  static async getBrandProuctsCount(data) {
    console.log("Quering database to get product category");
    const query = pbQueries.getBrandsProuctsCount(data);
    const d = await db.query(query);
    return d;
  }
  
}
module.exports = PBService;
