const axios = require('axios');

const endpoint = 'https://data.sfgov.org/resource/rqzj-sfat.json';

async function getFoodTrucksData(food_name) {
  if (food_name) {
    return await axios.get(endpoint, {
      params: {
        $order: 'applicant ASC',
        $where: 'fooditems like \'%' + food_name + '%\'',
      }
    });
  }

  return { data: [] };
}

module.exports = {
  getFoodTrucksData
};