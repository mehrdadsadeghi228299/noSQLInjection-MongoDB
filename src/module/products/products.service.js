const Products = require("./products.model");
const createHttpError = require("http-errors");

class ProductsService {
  async createProduct(name, price, description, count) {
    try {
      const newProduct = (
        await Products.create({ name, price, description, count })
      ).save();
      return newProduct;
    } catch (error) {
      return createHttpError.NotFound(
        "we have some issues with unique type check, please verify your input."
      );
    }
  }

  async findProductsByNameWithEQ(name) {
    try {
      const foundProducts = await Products.find({ name: { $eq: name } });
      return foundProducts;
    } catch (error) {
      return createHttpError.NotFound("doesn't match the product name");
    }
  }

  async findByPriceProductsWithGT(userPrice) {
    try {
      const foundProducts = await Products.find({ price: { $gt: userPrice } });
      // const foundProducts = await Products.where('price').gt(userPrice);
      return foundProducts;
    } catch (error) {
      return createHttpError.NotFound("doesn't match the product price");
    }
  }

  async findByPriceProductsWithLT(userPrice) {
    try {
      const foundProducts = await Products.find({ price: { $lt: userPrice } });
      // const foundProducts = await Products.where('price').lt(userPrice);
      return foundProducts;
    } catch (error) {
      return createHttpError.NotFound("doesn't match the product price");
    }
  }

  async findProductsByPriceWithGTE(userPrice) {
    try {
      const foundProducts = await Products.find({ price: { $gte: userPrice } });
      // const foundProducts = await Products.where('price').gte(userPrice);
      return foundProducts;
    } catch (error) {
      return createHttpError.NotFound("doesn't match the product price");
    }
  }
  async findProductsByPriceWithEQ(userPrice) {
    try {
      const foundProducts = await Products.find({ price: { $eq: userPrice } });
      // const foundProducts = await Products.where('price').equals(userPrice);
      return foundProducts;
    } catch (error) {
      return createHttpError.NotFound("doesn't match the product price");
    }
  }
  async findProductsByPriceWithNE(price) {
    try {
      const foundProducts = await Products.find({ price: { $ne: price } });
      return foundProducts;
    } catch (error) {
      return createHttpError.NotFound("doesn't match the product price");
    }
  }

  async findProductsByNameWithNE(username) {
    try {
      const foundProducts = await Products.find({ name: { $ne: username } });
      return foundProducts;
    } catch (error) {
      return createHttpError.NotFound("doesn't match the product name");
    }
  }
}


module.exports = new ProductsService();
