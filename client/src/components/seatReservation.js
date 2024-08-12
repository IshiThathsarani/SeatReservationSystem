import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SeatReservation = () => {
  const [seats, setSeats] = useState([]);
  const [seatNumber, setSeatNumber] = useState('');
  const [nic, setNic] = useState('');
  const [name, setName] = useState('');

  const fetchSeats = async () => {
    try {
      const response = await axios.get('http://localhost:4000/seats');
      setSeats(response.data);
    } catch (error) {
      console.error('Error fetching seats:', error);
    }
  };

  useEffect(() => {
    fetchSeats();
  }, []);

  const reserveSeat = async () => {
    if (seatNumber && nic && name) {
      try {
        await axios.post('http://localhost:4000/reserve', {
          seatNumber: parseInt(seatNumber),
          nic,
          name,
        });
        fetchSeats();
        setSeatNumber('');
        setNic('');
        setName('');
      } catch (error) {
        console.error('Error reserving seat:', error);
      }
    }
  };

  return (
    <div>
      <h1>Online Seat Reservation</h1>
      <form onSubmit={(e) => { e.preventDefault(); reserveSeat(); }}>
        <div>
          <label>Seat Number:</label>
          <input
            type="number"
            value={seatNumber}
            onChange={(e) => setSeatNumber(e.target.value)}
          />
        </div>
        <div>
          <label>Reserver's NIC:</label>
          <input
            type="text"
            value={nic}
            onChange={(e) => setNic(e.target.value)}
          />
        </div>
        <div>
          <label>Reserver's Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">Reserve</button>
      </form>
      <div>
        <h2>Available Seats</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', width: '400px' }}>
          {seats.map(seat => (
            <button
              key={seat.seatNumber}
              style={{
                width: '50px',
                height: '50px',
                margin: '5px',
                backgroundColor: seat.isReserved ? 'red' : 'green',
              }}
              disabled={seat.isReserved}
            >
              {seat.seatNumber}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeatReservation;
