import EquipmentModel from "../models/Equipment.js";
import RoomModel from "../models/Room.js";
import ValidateRoom from "../validation/ValidRoom.js";



export async function create(req, res) {
    try {
        const { name, capacity, equipments } = req.body;
        const { errors, isValid } = ValidateRoom(req.body);

        RoomModel.findOne({ name: req.body.name }).then(async(exist) => {
          if (exist) {
            errors.name = "room exist";
            res.status(404).json(errors);
          }else{
            for (const { equipement, quantite } of equipments) {
              const equipmentData = await EquipmentModel.findById(equipement);
              if (!equipmentData) {
                errors.equipment = "Equipment  not found";
                res.status(404).json(errors);
              }
              if (quantite > equipmentData.stock ) {
                errors.quantity = "The quantity entered for the equipment exceeds the available stock";
                res.status(404).json(errors);
              }
            }
        

            const nouvelleSalle = new RoomModel({
              name,
              capacity,
              equipments
            });
        
            const salleEnregistree = await nouvelleSalle.save();
        
            // update stock
            for (const { equipement, quantite } of equipments) {
              await EquipmentModel.findByIdAndUpdate(equipement, { $inc: { stock: -quantite } });
            }
        
            res.status(201).json(salleEnregistree);
          }} 

        )
        
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
};

export async function showRoom(req, res) {
  const { id } = req.params;
      const room = await RoomModel.findById(id);
  try {
      
      if (!room) {
          return res.status(404).send("Room not found");
      }
      res.send(room);
  } catch (error) {
      console.error(error);
      res.status(500).send('Erreur du serveur : ' + error.message);
  }
}

export async function editRoom(req, res)  {
  try {
      const {id} = req.params;
      const updatedRoom = await RoomModel.findByIdAndUpdate(id,req.body)
      res.send(updatedRoom)
   } catch (error) {
       res.status(400).send(error.message)
   }
};

export async function deleteRoom(req,res) {
  try {
     const {id} = req.params;
     await RoomModel.findByIdAndDelete(id)
     res.send('Room deleted successfully')
  } catch (error) {
      res.status(400).send(error.message)
  }
};


export async function showRooms(req, res) {
  try {
    const rooms = await RoomModel.find({}).populate('equipments',["name","description","stock"]);

    if (rooms) {
      res.json(rooms);
    } else {
      res.status(404).json({ message: "Rooms not found" });
    }
  } catch (error) {
    console.error("Error fetching rooms:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}




/*
export async function showRooms(req,res) {
    
  const rooms = await RoomModel.find().populate('equipments',["name"]);
      if(rooms){
          res.json(rooms);
      }else{
          res.status(404).json({message:"rooms not found"});
      }
  
}
*/