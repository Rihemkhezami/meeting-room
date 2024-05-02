import UserModel from "../models/User.js";


export async function userDetails(req,res){
    const {id} = req.params;
    const user = await UserModel.findById(id);
        if(user){
            res.json(user);
        }else{
            res.status(404).json({message:"User not found"});
        }
  }

  
export async function updateDetails (req, res)  {
    const {id}=req.params;
    try {
        await UserModel.findByIdAndUpdate(id,req.body);
        res.json({ message: "user updated successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
  };

export async function allProfiles(req,res){
    try {
        const users =  await UserModel.find();
        res.json(users);
  
     } catch (error) {
         res.status(404).json(error.message)
     }
  }
