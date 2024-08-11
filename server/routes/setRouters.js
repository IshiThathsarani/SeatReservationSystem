// define routes for the application

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getSeats);
router.post('/reserve', userController.reserveSeat);
router.post('/cancel', userController.cancelReservation);

module.exports = router;