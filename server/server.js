import express from 'express';
import connectDB from './config/db.js';
const port = 4000;

const app = express();
connectDB();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {    
  console.log('Server is running on http://localhost:4000');
});

