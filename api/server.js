const express = require("express");
const cors = require('cors');
const dotenv = require('dotenv');
const trainerApi = require('./routes/trainerApi');
const allTrainerApi = require('./routes/allTrainerApi');

const server = express();
dotenv.config();

let whitelist = ['http://localhost:3000']
let corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
// Then pass to cors:
server.use(cors(corsOptions));

server.get("/trainers", trainerApi)
server.get("/alltrainers", allTrainerApi)

const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
});

