import React, { useEffect, useState } from 'react';
import axios from 'axios';  //making HTTP requests from the client-side.
import Seat from './Seat';

const SeatList = () => {
    const [seats, setSeats] = useState([]);

    useEffect(() => {
        const fetchSeats = async () => {
            const { data } = await axios.get('/api/seats');
            setSeats(data);
        };
        fetchSeats();
    }, []);

    const reserveSeat = async (seatNumber) => {
        await axios.post('/api/seats/reserve', { seatNumber, reservedBy: 'John Doe' });
        const updatedSeats = seats.map(seat => 
            seat.seatNumber === seatNumber ? { ...seat, reserved: true, reservedBy: 'John Doe' } : seat
        );
        setSeats(updatedSeats);
    };

    const cancelReservation = async (seatNumber) => {
        await axios.post('/api/seats/cancel', { seatNumber });
        const updatedSeats = seats.map(seat => 
            seat.seatNumber === seatNumber ? { ...seat, reserved: false, reservedBy: null } : seat
        );
        setSeats(updatedSeats);
    };

    return (
        <div className="seat-list">
            {seats.map(seat => (
                <Seat 
                    key={seat.seatNumber} 
                    seat={seat} 
                    onReserve={reserveSeat} 
                    onCancel={cancelReservation} 
                />
            ))}
        </div>
    );
};

export default SeatList;
