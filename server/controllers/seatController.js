// implement the CRUD operations

import Seat from '../models/seatModel.js';

// Get all seats
const getSeats = async (req, res) => {
    const seats = await Seat.find({});
    res.json(seats);
};

// Reserve a seat
const reserveSeat = async (req, res) => {
    const { seatNumber, reservedBy } = req.body;

    const seat = await Seat.findOne({ seatNumber });

    if (seat) {
        if (seat.reserved) {
            res.status(400).json({ message: 'Seat already reserved' });
        } else {
            seat.reserved = true;
            seat.reservedBy = reservedBy;
            await seat.save();
            res.json({ message: 'Seat reserved successfully', seat });
        }
    } else {
        res.status(404).json({ message: 'Seat not found' });
    }
};

// Cancel a reservation
const cancelReservation = async (req, res) => {
    const { seatNumber } = req.body;

    const seat = await Seat.findOne({ seatNumber });

    if (seat) {
        if (seat.reserved) {
            seat.reserved = false;
            seat.reservedBy = null;
            await seat.save();
            res.json({ message: 'Reservation cancelled successfully', seat });
        } else {
            res.status(400).json({ message: 'Seat is not reserved' });
        }
    } else {
        res.status(404).json({ message: 'Seat not found' });
    }
};

export default { getSeats, reserveSeat, cancelReservation };