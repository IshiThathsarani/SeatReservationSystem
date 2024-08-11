import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect
        (
            "mongodb+srv://thathsaranisiriwardena:txliNEY89ANo94E9@seatreserve.hpvya.mongodb.net/?retryWrites=true&w=majority&appName=SeatReserve", 
        );
    
    console.log("MongoDB connection is successful");

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

// module.exports = connectDB;
export default connectDB;