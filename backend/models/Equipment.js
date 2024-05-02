import mongoose from 'mongoose';


const EquipmentSchema = new mongoose.Schema({
    name:String,
    description:String,
    photo:{
        data: Buffer, // Les données binaires de l'image
        contentType: String // Le type MIME de l'image (image/jpeg, image/png, etc.)
      },
    stock:Number
})



const EquipmentModel= mongoose.model("equipments",EquipmentSchema);


export default EquipmentModel;