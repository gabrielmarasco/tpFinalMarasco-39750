let express = require('express');
let router = express.Router();
let cartsController = require('../controllers/cartsController');
/* GET users listing. */
router.get('/', cartsController.index);

module.exports = router;
