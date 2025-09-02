

const {model ,Schema} = require('mongoose');

const productsSchema = new Schema({
  name: {
    type: String,
    required: true,
    //unique: true,
    trim: true
  },
  price: {
    type:Number
  },
  count: {
    type: Number
    //required: true,

  }, 
  description: {
    type: String,
    required: true,
    trim: true,
  },
   
  whoAdd: {
    type: String
  //  required: true,
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
const Products = model('Products', productsSchema);

module.exports = {Products};
