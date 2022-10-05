var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights')

// const flightsCtrl = require('../controllers/flights');
router.get('/new', flightsCtrl.new);
router.post('/', flightsCtrl.create);
router.get('/', flightsCtrl.index);
router.get('/:id', flightsCtrl.show);

//make sure to remember this 
module.exports = router;
