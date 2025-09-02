const express = require('express');
const productController  = require('./product.controller');
const ProRoutes = express.Router();


ProRoutes.get('/getcreateProduct', productController.getcreateProduct);
ProRoutes.post('/createProduct', productController.createProduct.bind(productController));
/*  Route for lab     */
ProRoutes.get('/products/name/eq/:name', productController.getProductsByNameWithEq.bind(productController));
ProRoutes.get('/products/name/ne/:name', productController.getProductsByNameWithNe.bind(productController));
ProRoutes.get('/products/price/gt/:price', productController.findByPriceProductsWithGT.bind(productController));
ProRoutes.get('/products/price/lt/:price', productController.findByPriceProductsWithLT.bind(productController));
ProRoutes.get('/products/price/ne/:price', productController.findProductsByPriceWithNE.bind(productController));
ProRoutes.get('/products/price/eq/:price', productController.findProductsByPriceWithEQ.bind(productController));

module.exports = {
    ProRoutes
};
