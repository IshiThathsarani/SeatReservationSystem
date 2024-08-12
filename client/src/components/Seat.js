// import React, { useState } from 'react';

// const Seat = ({ seat, onReserve, onCancel }) => {
//     const [reservedBy, setReservedBy] = useState('');

//     const handleReserve = () => {
//         if (reservedBy.trim()) {
//             onReserve(seat.seatNumber, reservedBy);
//             setReservedBy('');
//         } else {
//             alert('Please enter your name');
//         }
//     };

//     const handleCancel = () => {
//         onCancel(seat.seatNumber);
//     };

//     return (
//         <div className="seat">
//             <p>Seat Number: {seat.seatNumber}</p>
//             <p>Reserved By: {seat.reservedBy ? seat.reservedBy : 'Not reserved'}</p>
//             {!seat.reserved ? (
//                 <>
//                     <input
//                         type="text"
//                         placeholder="Enter your name"
//                         value={reservedBy}
//                         onChange={(e) => setReservedBy(e.target.value)}
//                     />
//                     <button onClick={handleReserve}>Reserve</button>
//                 </>
//             ) : (
//                 <button onClick={handleCancel}>Cancel Reservation</button>
//             )}
//         </div>
//     );
// };

// export default Seat;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Seat = ({ seat, onUpdate }) => {
//     const [seatNumber, setSeatNumber] = useState(seat.seatNumber || '');
//     const [reserved, setReserved] = useState(seat.isReserved || false);

//     useEffect(() => {
//         setSeatNumber(seat.seatNumber);
//         setReserved(seat.isReserved);
//     }, [seat]);

//     const handleSeatNumberChange = (e) => {
//         setSeatNumber(e.target.value);
//     };

//     const handleReservedChange = (e) => {
//         setReserved(e.target.checked);
//     };

//     const handleReserve = async () => {
//         try {
//             if (reserved) {
//                 await axios.post('http://localhost:4000/api/seats/cancel', { seatNumber });
//                 setReserved(false);
//             } else {
//                 await axios.post('http://localhost:4000/api/seats/reserve', { seatNumber });
//                 setReserved(true);
//             }
//             onUpdate(); // Trigger update to refresh seat list
//         } catch (error) {
//             console.error('Error handling seat reservation:', error);
//         }
//     };

//     return (
//         <div className="seat">
//             <label htmlFor={`seat-${seat.seatNumber}`}>Seat Number: </label>
//             <input
//                 id={`seat-${seat.seatNumber}`}
//                 type="text"
//                 value={seatNumber}
//                 onChange={handleSeatNumberChange}
//                 disabled={reserved}
//             />
//             <label htmlFor={`reserved-${seat.seatNumber}`}>Reserved: </label>
//             <input
//                 id={`reserved-${seat.seatNumber}`}
//                 type="checkbox"
//                 checked={reserved}
//                 onChange={handleReservedChange}
//                 disabled={reserved}
//             />
//             <button onClick={handleReserve}>
//                 {reserved ? "Cancel Reservation" : "Reserve Seat"}
//             </button>
//         </div>
//     );
// };

// export default Seat;


import React from 'react';

const Seat = ({ number, available, onClick }) => {
  return (
    <div className={`seat ${available ? 'available' : 'occupied'}`} onClick={onClick}>
      {number}
    </div>
  );
};

export default Seat;
