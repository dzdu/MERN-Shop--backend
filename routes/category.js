const express = require('express');
const router = express.Router();

// middlewares
const { authCheck, adminCheck } = require('../middlewares/auth');

//import controller
const { create, read, update, remove, list } = require('../controllers/category');

router.post('/category', authCheck, adminCheck, create); //create
router.get('/category/:slug', read); //read
router.put('/category/:slug', authCheck, adminCheck, update); //update
router.delete('/category/:slug', authCheck, adminCheck, remove); //remove
router.get('/categories', list); //list

module.exports = router;
