const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../user/user.model');
const Products = require('./products.model');

class ProductsService {

    
    async newProducts(name, price, description,count) {
       try {
           const newProduct = (await Products.create({ name, price, description, count })).save();
           return newProduct;
       } catch (error) {
        return "we have some issues with unique type check, please verify your input."
       }
    }
}

module.exports = new ProductsService();

