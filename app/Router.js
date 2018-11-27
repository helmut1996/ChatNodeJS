const express = require('express');
const router = express.Router();
const controllers = require('./Controllers');

router.get('/', controllers.index);
module.exports = router;