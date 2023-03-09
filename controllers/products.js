const Product = require("../models/product");

//
const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({}).sort("-name price");
  res.status(200).json({ products, nbHits: products.length });
};

const getAllProducts = async (req, res) => {
  const { featured, company, name, sort } = req.query;
  const queryObject = {};
  //looking for a featured products
  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }
  //looking for a search for a particular company
  if (company) {
    queryObject.company = company;
  }
  //retrieving with name property
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }
  console.log(queryObject);

  let products = await Product.find(queryObject);
  res.status(200).json({ products, nbHits: products.length });
};

//delete products
const deleteProduct = async (req, res) => {
  res.status(200).json({ msg: "delete a single product" });
};
const updateProduct = async (req, res) => {
  res.status(200).json({ msg: "update a single product" });
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
  deleteProduct,
  updateProduct,
};
