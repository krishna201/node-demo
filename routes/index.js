const express = require('express');
const app = express.Router();
const user_controller = require('../controllers/user_controllers');

app.route('/user/get_product').post(user_controller.getProductList);
app.route('/user/addOrderData').post(user_controller.addOrderDataFunc);
module.exports = app;