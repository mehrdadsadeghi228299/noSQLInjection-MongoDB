const express = require('express');
const { ProRoutes } = require('./products/products.routes');
const router = express.Router();
 

router.use("/pro",ProRoutes)

module.exports={
    router
}