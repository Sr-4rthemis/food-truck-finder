var express = require('express');
var router = express.Router();

const { getFoodTrucksData } = require('../lib/apis/mobile_food_facilities/services');

/* GET home page. */
router.get('/', async (req, res, next) => {

  const food_name = req.query.food_name ? req.query.food_name : '';
  const api_response = await getFoodTrucksData(food_name);
  const foodtrucks = api_response.data;

  res.render('index', { title: 'index', foodtrucks: foodtrucks, food_name: food_name });
});

module.exports = router;
