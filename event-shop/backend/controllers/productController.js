// backend/controllers/productController.js

exports.getProducts = (req, res) => {
  res.json({ message: "Get all products" });
};

exports.getProduct = (req, res) => {
  res.json({ message: "Get single product" });
};

exports.createProduct = (req, res) => {
  res.json({ message: "Create product" });
};

exports.updateProduct = (req, res) => {
  res.json({ message: "Update product" });
};

exports.deleteProduct = (req, res) => {
  res.json({ message: "Delete product" });
};
