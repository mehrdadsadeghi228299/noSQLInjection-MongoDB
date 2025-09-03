const createHttpError = require("http-errors");
const productsModel = require("./products.model");


class ProductsService {
  async createProduct({ name, price, description, count }) {
    try {
      const newProduct = await productsModel.create({ name, price, description, count, accessLevel: 'user', whoAdd: "me" });
      return newProduct;
      
    } catch (error) {
      return createHttpError.NotFound(
        "we have some issues with unique type check, please verify your input."+error
      );
    }
  }

  async findProductsByNameWithEQ(name) {
    try {
      const foundProducts = await productsModel.find({ name: { $eq: name } });
      return foundProducts;
    } catch (error) {
      return createHttpError.NotFound("doesn't match the product name");
    }
  }

  async findByPriceProductsWithGT(userPrice) {
    try {
      const foundProducts = await productsModel.find({ price: { $gt: userPrice } });
      // const foundProducts = await Products.where('price').gt(userPrice);
      return foundProducts;
    } catch (error) {
      return createHttpError.NotFound("doesn't match the product price");
    }
  }

  async findByPriceProductsWithLT(userPrice) {
    try {
      const foundProducts = await productsModel.find({ price: { $lt: userPrice } });
      // const foundProducts = await Products.where('price').lt(userPrice);
      return foundProducts;
    } catch (error) {
      return createHttpError.NotFound("doesn't match the product price");
    }
  }

  async findProductsByPriceWithGTE(userPrice) {
    try {
      const foundProducts = await productsModel.find({ price: { $gte: userPrice } });
      // const foundProducts = await Products.where('price').gte(userPrice);
      return foundProducts;
    } catch (error) {
      return createHttpError.NotFound("doesn't match the product price");
    }
  }
  async findProductsByPriceWithEQ(userPrice) {
    try {
      const foundProducts = await productsModel.find({ price: { $eq: userPrice } });
      // const foundProducts = await Products.where('price').equals(userPrice);
      return foundProducts;
    } catch (error) {
      return createHttpError.NotFound("doesn't match the product price");
    }
  }
  async findProductsByPriceWithNE(price) {
    try {
      const foundProducts = await productsModel.find({ price: { $ne: price } });
      return foundProducts;
    } catch (error) {
      return createHttpError.NotFound("doesn't match the product price");
    }
  }

  async findProductsByNameWithNE(username) {
    try {
      const foundProducts = await productsModel.find({ name: { $ne: username } });
      return foundProducts;
    } catch (error) {
      return createHttpError.NotFound("doesn't match the product name");
    }
  }
}


module.exports = new ProductsService();
