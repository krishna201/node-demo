
const queryBuiler = require("../querybuilders/querybuilder");
let productList= [
  {
    product_name: "Cricket Bat",
    price: 100,
    image_name:'pic1.jpg'
  },
  {
    product_name: "Mobile",
    price: 600,
    image_name:'pic2.jpeg'
  },
  {
    product_name: "ball",
    price: 120,
    image_name:'pic3.jpg'
  },
  {
    product_name: "Laptop",
    price: 1000,
    image_name:'pic4.png'
  },
  {
    product_name: "Mobile Cover",
    price: 60,
    image_name:'pic5.jpg'
  },
  {
    product_name: "Man Shirt",
    price: 110,
    image_name:'pic6.jpg'
  },
  {
    product_name: "Man t-shirt",
    price: 90,
    image_name:'pic7.jpeg'
  },
]
module.exports = {
 
  
  initilDataAdd: async (req,res) => {
    try {
      let ProductDbModel = req.Product;
      const resultdata = await queryBuiler.find(ProductDbModel);
      if (resultdata && resultdata.length===0) {
      
        await queryBuiler.insertManydata(ProductDbModel, productList);
      }
    } catch (error) {
      console.log(error)
    }
  },
};
