const express = require("express")
const router = express.Router()
const controller = require("../controllers/product.controller")

router.post("/product",controller.createProduct)
module.exports=router;