import EquipmentModel from "../models/Equipment.js";
import ValidateEquipment from "../validation/ValidEquipment.js";


export async function create(req, res) {
    const { name, description,stock } = req.body;
    const { errors, isValid } = ValidateEquipment(req.body);

    try {
        if (!isValid) {
          res.status(404).json(errors);
        } else {
          EquipmentModel.findOne({ name: req.body.name }).then(async(exist) => {
            if (exist) {
              errors.name = "equipment exist";
              res.status(404).json(errors);
            } else {
                const equipement = new EquipmentModel({
                    name,
                    description,
                    stock,
                    photo: {
                        data: req.body.photoData, 
                        contentType: req.body.photoType 
                      }
                });
                await equipement.save();
                res.status(201).send({message:'Equipment added successfully',equipement:equipement});
            }
          });
        }
    } catch (error) {
        res.status(404).json(error.message);
      }
};


export async function showEquipment(req,res) {
    const {id} = req.params;
    const equipement = await EquipmentModel.findById(id);
        if(equipement){
            res.json(equipement);
        }else{
            res.status(404).json({message:"Equipment not found"});
        }
    
}

export async function editEquipment (req, res)  {
    const {id}=req.params;
    try {
        await EquipmentModel.findByIdAndUpdate(id,req.body);
        res.json({ message: "Equipment updated successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export async function deleteEquipment(req,res) {
    try {
       const {id} = req.params;
       await EquipmentModel.findByIdAndDelete(id)
       res.send('Equipment deleted successfully')
    } catch (error) {
        res.status(400).send(error.message)
    }
};


export async function showEquipments(req,res) {
    
    const equipements = await EquipmentModel.find();
        if(equipements){
            res.json(equipements);
        }else{
            res.status(404).json({message:"Equipments not found"});
        }
    
}