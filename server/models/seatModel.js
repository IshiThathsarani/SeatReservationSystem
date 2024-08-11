// define seat schema and model

import mongoose from 'mongoose';
const { Schema } = mongoose;

const seatSchema = new Schema({
    seatNumber: { type: Number, required: true, unique: true },
    reserved: { type: Boolean, required: true, default: false },
    reservedBy: { type: String },
}, {
    timestamps: true,
});

const Seat = mongoose.model('Seat', seatSchema);

export default Seat;
