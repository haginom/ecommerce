const axios = require('axios').default;

const allTrainerApi = (req, res) => {
  let gender = req.headers.gender;
  let brand = req.headers.brand;

  let options = {
    method: 'GET',
    url: `https://v1-sneakers.p.rapidapi.com/v1/sneakers?`,
    params: { limit: '20', gender: gender, brand: brand },
    headers: {
      'x-rapidapi-host': 'v1-sneakers.p.rapidapi.com',
      'x-rapidapi-key': process.env.API_KEY
    }
  };
  axios.request(options)
    .then(function (response) {
      res.send(response.data);
    }).catch(function (error) {
      console.error(error);
    });
}


module.exports = allTrainerApi