import React from 'react';

const Seat = ({ seat, onReserve, onCancel }) => {
    return (
        <div className={`seat ${seat.reserved ? 'reserved' : ''}`}>
            <p>Seat {seat.seatNumber}</p>
            {seat.reserved ? (
                <button onClick={() => onCancel(seat.seatNumber)}>Cancel Reservation</button>
            ) : (
                <button onClick={() => onReserve(seat.seatNumber)}>Reserve</button>
            )}
        </div>
    );
};

export default Seat;
