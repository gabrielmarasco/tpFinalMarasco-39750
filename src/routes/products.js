let express = require('express');
let router = express.Router();
let productsController = require('../controllers/productsController');
/* GET users listing. */
router.get('/', productsController.index);

module.exports = router;
