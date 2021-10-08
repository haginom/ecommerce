# Frontend E-commerce Application 


<img src="Screenshot.png" width="200" >


It's a fancy prototype for an E -commerce shopping site for a fake brand. 
## Tech Stack

- React Frontend 
- Node, Express Backend

## Functionality

Instead of implementing a database, I have used a third party API to imitate having products. 

The client sends a request to the backend API, which then makes the actual API call to [V1 Sneaker API](https://rapidapi.com/tg4-solutions-tg4-solutions-default/api/v1-sneakers/) with the API key. The backend API then sends data back to the client. 

The client imitates login functionality but there is no authorisation or authentication. 

The client does not have any functionality to add items to a basket or to make payments. 

## To run it locally

From the project directory, change directory to client and run:
### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

From the project directory, change directory to api and run:
### `npm run dev`

## Design Inspiration
- https://www.sneakerdistrict.nl/
- https://www.fjallraven.com/
- https://www.footlocker.co.uk/
- https://github.com/fac21/E-commerce-app-CSCS

