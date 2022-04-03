const express = require('express');

const {Router} = express;
const router = new Router();

const employee = require('./employee');

router.use('/api/employees', employee);

module.exports = router;
