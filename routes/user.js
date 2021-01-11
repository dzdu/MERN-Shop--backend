const express = require('express');
const router = express.Router();

const { user } = require('../controllers/auth');

router.get('/user', user);

module.exports = router;
