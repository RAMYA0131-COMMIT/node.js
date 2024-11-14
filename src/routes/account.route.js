const express = require("express");
const router = express.Router();
const controller = require("../controllers/account.controller");
const {verifyToken} = require ('../middlewares/auth Token');
router.post("/account",verifyToken,controller.createAccount);

module.exports=router;