const mongoose = require ('mongoose')

mongoose.connect('mongodb://localhost:27017/BASE_PRODUCT',
{useNewUrlParser: true, useUnifiedTopology: true})

const Product = mongoose.model('Product',{
  position:{type:Number},
  name: {type:String},
  price:{type:Number},
  number:{type:Number},
  color:{type:String},
  file:{type:String}
})

module.exports = Product
