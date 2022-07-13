
const request = require('request');

const fetchBreedDescription = function(fetchingBreed, callback) {
  const url = "https://api.thecatapi.com/v1/breeds/search?q=";

  request(url + fetchingBreed, (error, response, body) => {
    if (error) {
      callback(null, 'Did not recieve request');
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      callback(null, 'Can\'t find that breed');
    } else {
      callback(null, data[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };
