import ReservationModel from '../models/Reservation.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';




//Show Reservations
export async function Reservations(req,res) {
    
    const reservations = await ReservationModel.find({}).populate('room',["name"]).populate('user',["email"]);
        if(reservations){
            res.json(reservations);
        }else{
            res.status(404).json({message:"Reservations not found"});
        }
    
}

//create Reservation
export async function create(req, res) {

    try {
        // Vérifier s'il existe déjà une réservation pour la même salle et la même date
        const existingReservation = await ReservationModel.findOne({
            room: req.body.room,
            startdate: req.body.startdate,
            enddate: req.body.enddate
        });

        // Si une réservation existe déjà, renvoyer un message d'erreur
        if (existingReservation) {
            return res.status(400).send("A reservation already exists for this room on the same date.");
        }

        // Si aucune réservation n'existe, créer la réservation avec les détails fournis
        req.body.status = "pending";
        req.body.user = req.user.id;
        await ReservationModel.create(req.body);
        res.status(201).send('Reservation added successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }

    /*
    try {
        req.body.status = "pending";
        req.body.user=req.user.id ;
        await ReservationModel.create(req.body);
        res.status(201).send('Reservation added successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }*/
}




//Show reservation
export async function showReservation(req, res) {
    const id  = req.params.id;
        const reservation = await ReservationModel.findById(id).populate('room',["name"]).populate('user',["email"]);
    try {
        
        if (!reservation) {
            return res.status(404).send("reservation not found");
        }
        res.json(reservation);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erreur du serveur : ' + error.message);
    }
}






//update reservation
export async function updateReservation(req, res)  {
    const id = req.params.id;
    try {
        const updatedReserv = await ReservationModel.findByIdAndUpdate(id,req.body)
        res.send('Reservation updated successfully')
     } catch (error) {
         res.status(400).send(error.message)
     }
};

//delete reservation
export async function deleteReservation(req,res) {
    const id= req.params.id;
    try {
       await ReservationModel.findByIdAndDelete(id)
       res.send('Reservation deleted successfully')
    } catch (error) {
        res.status(400).send(error.message)
    }
};






