// define routes for the application

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// import express from 'express';
// import userController from '../controllers/userController.js';
// import { Router } from 'express';



router.get('/', userController.getSeats);
router.post('/reserve', userController.reserveSeat);
router.post('/cancel', userController.cancelReservation);

export default router;