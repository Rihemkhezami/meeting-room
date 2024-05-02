import mongoose from 'mongoose';


const RoomSchema = new mongoose.Schema({
    name: String,
    capacity: Number,
    equipments: [
        {
            equipment: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'equipments'
            },
            quantity: Number
        }
    ],
});



const RoomModel= mongoose.model("rooms",RoomSchema);


export default RoomModel;