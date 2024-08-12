import mongoose from 'mongoose';

const reservationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  seats: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Seat' }],
  date: Date,
  time: String,
  status: String
});

export default mongoose.model('Reservation', reservationSchema);
