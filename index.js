const { fetchBreedDescription } = require('./breedFetcher');

const fetchingBreed = process.argv[2];

fetchBreedDescription(fetchingBreed, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});
