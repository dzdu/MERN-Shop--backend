const express = require('express');
const router = express.Router();

// middlewares
const { authCheck, adminCheck } = require('../middlewares/auth');

//import controller
const { create } = require('../controllers/product');

//routes
router.post('/product', authCheck, adminCheck, create); //create

module.exports = router;
