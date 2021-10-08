const axios = require('axios').default;

const trainerApi = (req, res) => {
  let trainersId = req.headers.trainersid;
  let options = {
    method: 'GET',
    url: `https://v1-sneakers.p.rapidapi.com/v1/sneakers/${trainersId}`,
    params: { limit: '10' },
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


module.exports = trainerApi