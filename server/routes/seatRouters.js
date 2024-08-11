// define routes for the application


// import express from 'express';
// // import { Router } from 'express';
// import { getSeats, reserveSeat, cancelReservation } from '../controllers/seatController.js';
// // const {getSeats, reserveSeat, cancelReservation} = require('../controllers/seatController');
// const router = express.Router();


// router.get('/', getSeats);
// router.post('/reserve', reserveSeat);
// router.post('/cancel', cancelReservation);

// export default router;

import express from 'express';
import { getSeats, reserveSeat, cancelReservation } from '../controllers/seatController.js';

const router = express.Router();

router.get('/seats', getSeats);            // GET request to fetch seats
router.post('/reserve', reserveSeat);      // POST request to reserve a seat
router.delete('/cancel', cancelReservation); // DELETE request to cancel a reservation

export default router;
