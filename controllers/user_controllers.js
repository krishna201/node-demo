const queryBuiler = require("../querybuilders/querybuilder");
class User_controller {

  getProductList = async (req, res) => {
    try {
      let ProductDbModel = req.Product;
      const data = req.body;
      
      
      const resultdata = await queryBuiler.find(ProductDbModel,{},data);
     
      res.json({ status: 1, data: resultdata });
    } catch (error) {
      res.json({ status: 0, msg: "Something error" });
    }
  };
  addOrderDataFunc = async (req, res) => {
    try {
      let OrderDbModel = req.Order;
      const data = req.body;
      await queryBuiler.insertdata(OrderDbModel, data);
      res.json({ status: 1, msg:"Order added successfully"});
    } catch (error) {
      res.json({ status: 0, msg: "Something error" });
    }
  };
}

const user_controller = new User_controller();
module.exports = user_controller;
