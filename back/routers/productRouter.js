const express = require("express");
const Product = require("../bd/productShema");

const router = express.Router();

router
  .route("/")
  .get(async (req, res) => {
    const products = await Product.find();
    res.status(200).json(products);
  })

  .post(async (req, res) => {
    const { name, price, number, color, file } = req.body;
    if (name && price && number && color) {
      let position = (await Product.find()).length + 1;
      const newProduct = await Product.create({
        position,
        name,
        price: +price,
        number: +number,
        color,
        file,
      });
      res.status(200).json(newProduct);
    } else {
      res.status(400).json({ createProduct: false });
    }
  })

  .delete(async (req,res) => {
    
    const {id} = req.body
    const delProd = await Product.findByIdAndDelete(id)
      res.status(200).json(delProd)
    
  })

  .put( async (req,res) => {
    const {startId,
      position1, endId,position2} = req.body   
      const oneProduct = await Product.findById(startId)
      oneProduct.position = position2
      await oneProduct.save()
      const twoProduct = await Product.findById(endId)
      twoProduct.position = position1
      await twoProduct.save()
  if(oneProduct && twoProduct){
      res.status(200).json(true)
    } else {
      res.status(400).json({createProduct:false})
    }
  })

module.exports = router;
