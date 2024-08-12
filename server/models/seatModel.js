// define seat schema and model

// import mongoose from 'mongoose';

// const seatSchema = new mongoose.Schema({
//     seatNumber: String,
//     reserved: Boolean,
//     reservedBy: String,
// });

// const Seat = mongoose.model('Seat', seatSchema);

// export default Seat;

// import mongoose from 'mongoose';

// const seatSchema = new mongoose.Schema({
//     seatNumber: { type: String, required: true, unique: true },
//     isReserved: { type: Boolean, default: false },
// });

// const Seat = mongoose.model('Seat', seatSchema);

// export default Seat;



import mongoose from 'mongoose';

const seatSchema = new mongoose.Schema({
  seatNumber: {
    type: Number,
    required: true,
    unique: true
  },
  reserverNIC: String,
  reserverName: String,
  isReserved: {
    type: Boolean,
    default: false
  }
});

const Seat = mongoose.model('Seat', seatSchema);
export default Seat;



