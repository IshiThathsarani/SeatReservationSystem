// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import Seat from './Seat';

// // const SeatList = () => {
// //     const [seats, setSeats] = useState([]);
// //     const [loading, setLoading] = useState(true);
// //     const [error, setError] = useState(null);

// //     useEffect(() => {
// //         const fetchSeats = async () => {
// //             try {
// //                 const { data } = await axios.get('http://localhost:4000/api/seats');
// //                 setSeats(data);
// //                 setLoading(false);
// //             } catch (error) {
// //                 setError('Error fetching seats');
// //                 setLoading(false);
// //             }
// //         };
// //         fetchSeats();
// //     }, []);

// //     const reserveSeat = async (seatNumber, reservedBy) => {
// //         try {
// //             await axios.post('http://localhost:4000/api/seats/reserve', { seatNumber, reservedBy });
// //             const updatedSeats = seats.map(seat =>
// //                 seat.seatNumber === seatNumber ? { ...seat, reserved: true, reservedBy } : seat
// //             );
// //             setSeats(updatedSeats);
// //         } catch (error) {
// //             console.error('Error reserving seat:', error);
// //         }
// //     };

// //     const cancelReservation = async (seatNumber) => {
// //         try {
// //             await axios.post('http://localhost:4000/api/seats/cancel', { seatNumber });
// //             const updatedSeats = seats.map(seat =>
// //                 seat.seatNumber === seatNumber ? { ...seat, reserved: false, reservedBy: null } : seat
// //             );
// //             setSeats(updatedSeats);
// //         } catch (error) {
// //             console.error('Error canceling reservation:', error);
// //         }
// //     };

// //     if (loading) return <p>Loading seats...</p>;
// //     if (error) return <p>{error}</p>;

// //     return (
// //         <div className="seat-list">
// //             {seats.length > 0 ? seats.map(seat => (
// //                 <Seat 
// //                     key={seat.seatNumber} 
// //                     seat={seat} 
// //                     onReserve={reserveSeat} 
// //                     onCancel={cancelReservation} 
// //                 />
// //             )) : <p>No seats available</p>}
// //         </div>
// //     );
// // };

// // export default SeatList;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Seat from './Seat';

// const SeatList = () => {
//     const [seats, setSeats] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchSeats = async () => {
//             try {
//                 const { data } = await axios.get('http://localhost:4000/api/seats');
//                 setSeats(data);
//                 setLoading(false);
//             } catch (error) {
//                 setError('Error fetching seats');
//                 setLoading(false);
//             }
//         };
//         fetchSeats();
//     }, []);

//     if (loading) return <p>Loading seats...</p>;
//     if (error) return <p>{error}</p>;

//     const availableSeats = seats.filter(seat => !seat.isReserved);

//     const reserveSeat = (seatNumber) => {
//         // Reserve seat logic here
//         console.log(`Reserving seat ${seatNumber}`);
//         // Update the state to reflect the reservation
//         setSeats(seats.map(seat =>
//             seat.seatNumber === seatNumber ? { ...seat, isReserved: true } : seat
//         ));
//     };

//     const cancelReservation = (seatNumber) => {
//         // Cancel reservation logic here
//         console.log(`Canceling reservation for seat ${seatNumber}`);
//         // Update the state to reflect the cancellation
//         setSeats(seats.map(seat =>
//             seat.seatNumber === seatNumber ? { ...seat, isReserved: false } : seat
//         ));
//     };

//     return (
//         <div className="seat-list">
//             {availableSeats.length > 0 ? availableSeats.map(seat => (
//                 <Seat 
//                     key={seat.seatNumber} 
//                     seat={seat} 
//                     onReserve={reserveSeat} 
//                     onCancel={cancelReservation} 
//                 />
//             )) : <p>No available seats</p>}
//         </div>
//     );
// };

// export default SeatList;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Seat from './Seat';

// const SeatList = () => {
//     const [seats, setSeats] = useState([]);

//     const fetchSeats = async () => {
//         try {
//             const response = await axios.get('http://localhost:4000/api/seats');
//             setSeats(response.data);
//         } catch (error) {
//             console.error('Error fetching seats:', error);
//         }
//     };

//     useEffect(() => {
//         fetchSeats();
//     }, []);

//     const handleUpdate = () => {
//         fetchSeats(); // Refresh the seat list
//     };

//     return (
//         <div>
//             {seats.length === 0 ? (
//                 <p>No seats available</p>
//             ) : (
//                 seats.map((seat) => (
//                     <Seat key={seat.seatNumber} seat={seat} onUpdate={handleUpdate} />
//                 ))
//             )}
//         </div>
//     );
// };

// export default SeatList;



import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SeatList = () => {
  const [seats, setSeats] = useState([]);

  useEffect(() => {
    fetchSeats();
  }, []);

  const fetchSeats = async () => {
    const res = await axios.get('http://localhost:4000/seats');
    setSeats(res.data);
  };

  const reserveSeat = async (seatNumber) => {
    const res = await axios.post('http://localhost:4000/reserve', { seatNumber });
    fetchSeats();
  };

  return (
    <div>
      <h1>Seat Reservation System</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', width: '400px' }}>
        {seats.map((seat, index) => (
          <button
            key={seat._id || index}  // Use seat._id if available, otherwise fallback to index
            style={{
              width: '50px',
              height: '50px',
              margin: '5px',
              backgroundColor: seat.isReserved ? 'red' : 'green',
            }}
            onClick={() => !seat.isReserved && reserveSeat(seat.seatNumber)}
          >
            {seat.seatNumber}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SeatList;
