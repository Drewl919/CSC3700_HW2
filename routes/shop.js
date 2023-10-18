const express = require('express');
const router = express.Router();
// const path = require('path');
// const adminData = require("./admin");
const productsController = require("../controllers/products");

router.get( '/showProducts', productsController.getProducts);

module.exports = router;