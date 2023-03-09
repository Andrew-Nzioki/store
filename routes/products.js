const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getAllProductsStatic,
  deleteProduct,
  updateProduct,
} = require("../controllers/products");

router.route("/").get(getAllProducts);
router.route("/static").get(getAllProductsStatic);
router.route("/:id").post(deleteProduct);

module.exports = router;
