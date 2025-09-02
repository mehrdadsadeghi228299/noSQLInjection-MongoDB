import productsService from './products.service';

const { validationResult } = require('express-validator');
const { StatusCodes } = require('http-status-codes');
const { HttpStatusCode } = require('axios');

class ProductsController {
constructor(){
  #this.service=productsService()
}
  

  getcreateProduct(req, res) {
    res.render('createProduct');
  }

   async createProduct(req, res) {
    // Logic for creating a product
    const errorValidator = validationResult(req);
            if (!errorValidator) {
              //  logger.log('info', "error for faild in validateAuthRegisterschema \'"+error+"\'");
                return res.status(HttpStatusCode.NotAcceptable).json({
                    statusCodes: HttpStatusCode.NotAcceptable,
                    message: errorValidator
                });   
            }
          
      const { name, price, description ,count} = req.body;

      const newProduct = #this.{ name, price, description };
      // Save the product to the database
      res.status(201).json({ message: 'Product created successfully', product: newProduct });
  }

}

export default new ProductsController();
