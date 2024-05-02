import UserModel from "../models/User.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import ValidateRegister from "../validation/Register.js";
import ValidateLogin from "../validation/Login.js";


export async function register(req, res) {
    const { errors, isValid } = ValidateRegister(req.body);
    try {
      if (!isValid) {
        res.status(404).json(errors);
      } else {
        UserModel.findOne({ email: req.body.email }).
        then(async(exist) => {
          if (exist) {
            errors.email = "user exist";
            res.status(404).json(errors);
          } else {
            req.body.role = "user";
            await UserModel.create(req.body);
            res.status(200).json({ message: "success" });
          }
        });
      }
    } catch (error) {
      res.status(404).json(error.message);
    }
  };



  export async function login(req,res){
    const {errors, isValid} = ValidateLogin(req.body)
   try {
      if(!isValid){
       res.status(404).json(errors)
      }else{
        UserModel.findOne({email: req.body.email})
      .then(user=>{
        if(!user){
          errors.email = "not found user"
          res.status(404).json(errors)
        }else{
          bcrypt.compare(req.body.password, user.password)
          .then(isMatch=>{
            if(!isMatch){
              errors.password = "incorrect password"
              res.status(404).json(errors)
            }else{
              var token = jwt.sign({ 
                id: user._id,
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email,
                phone:user.phone,
                role: user.role
               }, process.env.PRIVATE_KEY,  { expiresIn: '1h' });
               res.status(200).json({
                 message: "success",
                 token: token
               })
            }
          })
        }
      })
      }
   } catch (error) {
    res.status(404).json(error.message);
   }
  }


export async function profile(req,res){
  try {
      const data =  await UserModel.findOne({ _id: req.user.id })
      res.status(200).json(data)

   } catch (error) {
       res.status(404).json(error.message)
   }
}

export async function editProfile(req, res) {
  const { firstname, lastname, email, phone} = req.body;
  
  try {
    const updatedUser = await UserModel.findOneAndUpdate({ _id: req.user.id },{ firstname, lastname, email, phone});

    if (updatedUser) {
      return res.json({ message: "Profile updated successfully" });
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}



export async function editPassword(req, res) {
  const { email, currentPassword, newPassword } = req.body;
  try {
    const user = await UserModel.findOne({ _id: req.user.id });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(currentPassword, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Incorrect current password" });
    }

    user.password=newPassword;
    await user.save();
    
    return res.json({ message: "Password updated successfully" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}
