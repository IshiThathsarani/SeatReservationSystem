import express from 'express';
import connectDB from './config/db.js';
import seatRouter from './routes/seatRouter.js';

const port = 4000;

dotenv.config();
const app = express();
connectDB();

app.use(express.json());
app.use('/api/seats', seatRouter);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {    
  console.log('Server is running on http://localhost:4000');
});

