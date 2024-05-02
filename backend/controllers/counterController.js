import EquipmentModel from "../models/Equipment.js";
import ReservationModel from "../models/Reservation.js";
import RoomModel from "../models/Room.js";
import UserModel from "../models/User.js";


export async function NbEquipments(req,res) {
    const equipments= await EquipmentModel.find();
        if(equipments){
            res.json(equipments.length);
        }else{
            res.status(404).json({message:"Equipment not found"});
        }
    
}

export async function NbRooms(req,res) {
    const rooms= await RoomModel.find();
        if(rooms){
            res.json(rooms.length);
        }else{
            res.status(404).json({message:"Equipment not found"});
        }
    
}

export async function NbUsers(req,res) {
    const users= await UserModel.find();
        if(users){
            res.json(users.length);
        }else{
            res.status(404).json({message:"Equipment not found"});
        }
    
}

export async function NbReservations(req,res) {
    const reservations= await ReservationModel.find();
        if(reservations){
            res.json(reservations.length);
        }else{
            res.status(404).json({message:"Equipment not found"});
        }
    
}

export async function nbConfirmed(req, res) {
    try {
        // Récupérer toutes les réservations
        const reservations = await ReservationModel.find();
        
        // Vérifier si des réservations sont trouvées
        if (reservations) {
            // Compter le nombre de réservations acceptées
            const nbReservationAcc = reservations.filter(reservation => reservation.status === "accepting");
            
            // Renvoyer le nombre de réservations acceptées
            res.json(nbReservationAcc.length);
        } else {
            res.status(404).json({ message: "Reservations not found" });
        }
    } catch (error) {
        console.error("Error fetching reservations:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export async function nbPending(req, res) {
    try {
        // Récupérer toutes les réservations
        const reservations = await ReservationModel.find();
        
        // Vérifier si des réservations sont trouvées
        if (reservations) {
            // Compter le nombre de réservations acceptées
            const nbReservationPend = reservations.filter(reservation => reservation.status === "pending");
            
            // Renvoyer le nombre de réservations acceptées
            res.json(nbReservationPend.length );
        } else {
            res.status(404).json({ message: "Reservations not found" });
        }
    } catch (error) {
        console.error("Error fetching reservations:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export async function nbCancelled(req, res) {
    try {
        // Récupérer toutes les réservations
        const reservations = await ReservationModel.find();
        
        // Vérifier si des réservations sont trouvées
        if (reservations) {
            // Compter le nombre de réservations acceptées
            const nbReservationCanc= reservations.filter(reservation => reservation.status === "cancelled");
            
            // Renvoyer le nombre de réservations acceptées
            res.json(nbReservationCanc.length );
        } else {
            res.status(404).json({ message: "Reservations not found" });
        }
    } catch (error) {
        console.error("Error fetching reservations:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}