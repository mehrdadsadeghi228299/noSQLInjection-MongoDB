
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const productsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  price: {
    type:Number
  },
  count: {
    type: Number,
    required: true,

  }, 
  description: {
    type: String,
    required: true,
    trim: true,
  },
   
  whoAdd: {
    type: String,
    required: true,
  },
  accessLevel: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

//productsSchema.index({ name: 'text', description: 'text' });
const Products = mongoose.model('Products', productsSchema);

module.exports = Products;
