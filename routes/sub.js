const express = require('express');
const router = express.Router();

// middlewares
const { authCheck, adminCheck } = require('../middlewares/auth');

//import controller
const { create, read, update, remove, list } = require('../controllers/sub');

router.post('/sub', authCheck, adminCheck, create); //create
router.get('/sub/:slug', read); //read
router.put('/sub/:slug', authCheck, adminCheck, update); //update
router.delete('/sub/:slug', authCheck, adminCheck, remove); //remove
router.get('/subs', list); //list

module.exports = router;
