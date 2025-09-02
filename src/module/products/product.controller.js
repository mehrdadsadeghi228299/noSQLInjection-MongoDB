const { validationResult } = require("express-validator");
const { HttpStatusCode } = require("axios");
const productsService = require("./products.service");

class ProductsController {

  async getcreateProduct(req, res) {
   try {
     res.render('createProduct.ejs');
   } catch (error) {
     console.error("Error rendering createProduct page:", error);
     res.status(500).send("Internal Server Error");
   }
  }

  async createProduct(req, res) {  

    const { name, price, description, count } = req.body;
    //req.body.whoAdd = req.user.id;
    const newProduct = await productsService.createProduct({
      name,
      price,
      description,
      count,
    });
    // Save the product to the database

    res
      .status(201)
      .json({ message: "Product created successfully", product: newProduct });
  }
  async getProductsByNameWithEq(req, res) {
    const name = req.params.name;
    const products = await productsService.findProductsByNameWithEQ(name);
    res.status(200).json({ products });
  }
  async getProductsByNameWithNe(req, res) {
    const name = req.params.name;
    const products = await productsService.findProductsByNameWithNE(name);
    res.status(200).json({ products });
  }
  async findByPriceProductsWithGT(req, res) {
    const price = req.params.price;
    const products = await productsService.findByPriceProductsWithGT(price);
    res.status(200).json({ products });
  }
  async findByPriceProductsWithLT(req, res) {
    const price = req.params.price;
    const products = await productsService.findByPriceProductsWithLT(price);
    res.status(200).json({ products });
  }
  async findProductsByPriceWithNE(req, res) {
    const price = req.params.price;
    const products = await productsService.findProductsByPriceWithNE(price);
    res.status(200).json({ products });
  }
  async findProductsByPriceWithEQ(req, res) {
    const price = req.params.price;
    const products = await productsService.findProductsByPriceWithEQ(price);
    res.status(200).json({ products });
  }
}

module.exports = new ProductsController();
