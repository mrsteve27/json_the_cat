
const request = require('request');

const fetchingBreed = process.argv[2];
const url = "https://api.thecatapi.com/v1/breeds/search?q=";

request(url + fetchingBreed, (error, response, body) => {
  if (error) {
    console.log('Did not recieve request');
    return;
  }
  
  const data = JSON.parse(body);
  // console.log(data);
  // console.log(typeof data);
  const breed = data[0];
  if (breed) {
    console.log(breed.description);
  } else {
    console.log('Can not find Breed name!');
  }
});
