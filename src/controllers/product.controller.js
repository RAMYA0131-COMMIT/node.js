const product = require("../models/product.model");
  
const createProduct = async(req,res)=>{
    try{
      let data = {
        ...req.body
      }
      const saveProduct = await product.create(data);
      res.json(saveProduct) 
    }catch(err){
      res.json(err.message)
    }
}
module.exports={createProduct}