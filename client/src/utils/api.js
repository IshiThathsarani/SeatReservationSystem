import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000/api' // Replace with your API base URL
});

export const fetchSeats = async () => {
  const response = await api.get('/seats');
  return response.data;
};

export const createReservation = async (reservationData) => {
  const response = await api.post('/reservations', reservationData);
  return response.data;
};

// Update a reservation
export const updateReservation = async (reservationId, updateData) => {
  const response = await api.put(`/reservations/${reservationId}`, updateData);
  return response.data;
};

// Cancel a reservation
export const cancelReservation = async (reservationId) => {
  const response = await api.delete(`/reservations/${reservationId}`);
  return response.data;
};

// Fetch a specific user
export const fetchUser = async (userId) => {
  const response = await api.get(`/users/${userId}`);
  return response.data;
};

// Update user information
export const updateUser = async (userId, updateData) => {
  const response = await api.put(`/users/${userId}`, updateData);
  return response.data;
};


