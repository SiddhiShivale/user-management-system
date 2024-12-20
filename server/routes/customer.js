const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

router.get('/', customerController.homePage);
router.get('/add', customerController.addCustomer);
router.post('/add', customerController.postCustomer);

module.exports = router;
