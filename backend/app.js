import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoute.js'
import manageRoutes from './routes/manageRoute.js'
import equipmentRoutes from './routes/equipmentRoute.js'
import roomRoutes from './routes/roomRoute.js'
import reservationRoutes from './routes/reservationRoute.js'
import counterRoutes from './routes/counterRoute.js'




dotenv.config();

const MONGODB_URI=process.env.MONGODB_URI;
const PORT= process.env.PORT;

const app=express();
app.use(express.json());
app.use(cors());

app.use('/user',userRoutes);
app.use('/api',manageRoutes);
app.use('/equipment',equipmentRoutes);
app.use('/room',roomRoutes);
app.use('/reservation',reservationRoutes);
app.use('/nb',counterRoutes);














//cpnnect to DataBase
mongoose.connect(MONGODB_URI)
    .then(()=>{
        console.log('connected to the database')
        app.listen(PORT,()=>{
            console.log("server is running")
        })

}).catch(err=>{
    console.log('Error connecting to database: ',err.message)
})