// import express from 'express';
// import mongoose from 'mongoose';
// import cors from 'cors';
// import bodyParser from 'body-parser';

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// const seatSchema = new mongoose.Schema({
//   seatNumber: Number,
//   reserverNIC: String,
//   reserverName: String,
//   isReserved: Boolean
// });

// const Seat = mongoose.model('Seat', seatSchema);

// app.post('/reserve', async (req, res) => {
//     const { seatNumber, nic, name } = req.body;
  
//     try {
//       if (!seatNumber || !nic || !name) {
//         return res.status(400).json({ message: 'Missing required fields' });
//       }
  
//       const seat = await Seat.findOne({ seatNumber });
  
//       if (seat && seat.isReserved) {
//         return res.status(400).json({ message: 'Seat already reserved' });
//       }
  
//       if (seat) {
//         seat.reserverNIC = nic;
//         seat.reserverName = name;
//         seat.isReserved = true;
//       } else {
//         const newSeat = new Seat({
//           seatNumber,
//           reserverNIC: nic,
//           reserverName: name,
//           isReserved: true
//         });
//         await newSeat.save();
//       }
  
//       res.status(200).json({ message: 'Seat reserved successfully' });
//     } catch (err) {
//       console.error('Error reserving seat:', err);
//       res.status(500).json({ message: 'Server error', error: err.message });
//     }
//   });
  

// mongoose.connect("mongodb+srv://thathsaranisiriwardena:txliNEY89ANo94E9@seatreserve.hpvya.mongodb.net/?retryWrites=true&w=majority&appName=SeatReserve", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(() => {
//   console.log('Connected to MongoDB');
// }).catch(err => {
//   console.error('MongoDB connection error:', err);
// });

// app.listen(4000, () => {
//   console.log('Server is running on port 4000');
// });


import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser'
import Seat from './models/seatModel.js';

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/seats', async (req, res) => {
  try {
    const seats = await Seat.find();
    res.status(200).json(seats);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

app.post('/reserve', async (req, res) => {
  const { seatNumber, nic, name } = req.body;

  try {
    if (!seatNumber || !nic || !name) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const seat = await Seat.findOne({ seatNumber });

    if (seat && seat.isReserved) {
      return res.status(400).json({ message: 'Seat already reserved' });
    }

    if (seat) {
      seat.reserverNIC = nic;
      seat.reserverName = name;
      seat.isReserved = true;
    } else {
      const newSeat = new Seat({
        seatNumber,
        reserverNIC: nic,
        reserverName: name,
        isReserved: true
      });
      await newSeat.save();
    }

    res.status(200).json({ message: 'Seat reserved successfully' });
  } catch (err) {
    console.error('Error reserving seat:', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

mongoose.connect("mongodb+srv://thathsaranisiriwardena:txliNEY89ANo94E9@seatreserve.hpvya.mongodb.net/?retryWrites=true&w=majority&appName=SeatReserve", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
