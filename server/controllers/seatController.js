// implement the CRUD operations

import Seat from '../models/seatModel.js';

// Get all seats
const getSeats = async (req, res) => {
    const seats = await Seat.find({});
    res.json(seats);
};

// Reserve a seat
const reserveSeat = async () => {
    if (seatNumber && nic && name) {
      try {
        await axios.post('http://localhost:4000/reserve', {
          seatNumber: parseInt(seatNumber),
          nic,
          name,
        });
        fetchSeats();
        resetForm();
      } catch (error) {
        console.error('Error reserving seat:', error.response?.data || error.message);
      }
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

export default { getSeats, reserveSeat, cancelReservation};
export { getSeats, reserveSeat, cancelReservation};

