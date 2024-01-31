const db = require("../../../config/mysql");
const testQueries = require("../../queries/testQueries/test");
class TestService {
  static async GetTests() {
    const q = await db.query(testQueries.getAllTest);
    console.log("Quering database to select all test");
    return q;
  }

  static async CreateTests(data) {
    console.log("Quering database to create  test");
    const q = await db.query(testQueries.createTest(data));
    return q;
  }
}
module.exports = TestService;