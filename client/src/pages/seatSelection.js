import React, { useState, useEffect } from 'react';
import Seat from '../components/Seat';

const SeatSelection = () => {
  const [seats, setSeats] = useState([]);

  useEffect(() => {
    // Fetch seats from API or initial data
    const fetchSeats = async () => {
      try {
        const response = await fetch('/api/seats');
        const data = await response.json();
        setSeats(data);
      } catch (error) {
        console.error('Error fetching seats:', error);
      }
    };

    fetchSeats();
  }, []);

  const handleSeatClick = (seat) => {
    // Handle seat selection logic
    console.log('Seat clicked:', seat);
  };

  return (
    <div>
      <h2>Seat Selection</h2>
      <div className="seat-grid">
        {seats.map((seat) => (
          <Seat key={seat._id} {...seat} onClick={() => handleSeatClick(seat)} />
        ))}
      </div>
    </div>
  );
};

export default SeatSelection;
