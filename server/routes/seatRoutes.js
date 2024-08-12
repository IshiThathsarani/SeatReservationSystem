// define routes for the application


// import express from 'express';
// import Seat from '../models/seatModel.js';

// const router = express.Router();

// // Route to get all seats
// router.get('/', async (req, res) => {
//     console.log('GET /api/seats route hit');  // Log when route is hit
//     try {
//         const seats = await Seat.find();  // Fetch seats from MongoDB
//         console.log('Fetched seats:', seats);  // Log the fetched seats
//         res.json(seats);
//     } catch (error) {
//         console.error('Error fetching seats:', error);
//         res.status(500).json({ message: 'Server error' });
//     }
// });

// export default router;


import express from 'express';
const router = express.Router();
import Seat from '../models/Seat';
const Reservation = require('../models/Reservation');
import User from '../models/userModel';

// Get all seats
router.get('/seats', async (req, res) => {
  try {
    const seats = await Seat.find();
    res.json(seats);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Get available seats
router.get('/seats/available', async (req, res) => {
  try {
    const availableSeats = await Seat.find({ available: true });
    res.json(availableSeats);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Create a new reservation
router.post('/reservations', async (req, res) => {
  try {
    const { userId, seatIds, date, time } = req.body;
    // Validation and business logic for reservation creation
    const reservation = new Reservation({
      user: userId,
      seats: seatIds,
      date,
      time,
      status: 'pending' // or 'confirmed', etc.
    });
    await reservation.save();
    res.status(201).json(reservation);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Get reservations for a user
router.get('/users/:userId/reservations', async (req, res) => {
  try {
    const reservations = await Reservation.find({ user: req.params.userId });
    res.json(reservations);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Create a new seat
router.post('/seats', async (req, res) => {
    try {
      const { number, row, column } = req.body;
      const seat = new Seat({ number, row, column, available: true });
      await seat.save();
      res.status(201).json(seat);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  });
  
  // Update a seat
  router.put('/seats/:seatId', async (req, res) => {
    try {
      const seat = await Seat.findByIdAndUpdate(req.params.seatId, req.body, { new: true });
      if (!seat) {
        return res.status(404).json({ message: 'Seat not found' });
      }
      res.json(seat);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  });
  
  // Delete a seat
  router.delete('/seats/:seatId', async (req, res) => {
    try {
      const seat = await Seat.findByIdAndDelete(req.params.seatId);
      if (!seat) {
        return res.status(404).json({ message: 'Seat not found' });
      }
      res.json({ message: 'Seat deleted' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  });
  

export default router;

