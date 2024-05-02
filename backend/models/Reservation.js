import mongoose from 'mongoose';


const ReservationSchema = new mongoose.Schema({
    title:String,
    startdate: {
        type: Date,
        min: [new Date(), "can't be before now!!"],
       },
       enddate: {
        type: Date,
        //setting a min function to accept any date one hour ahead of start
        min: [function(){
          const date = new Date(this.startdate)
          const validDate = new Date(date.setHours(date.getHours()+1)) 
          return validDate
        },"Event End must be at least one hour a head of event time"],
       default: function(){
         const date = new Date(this.startdate)
         return date.setDate(date.getDate()+1)
       },
       },
    status: { type: String, default: "pending" },
    reponse:String,
    room: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'rooms'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    description:String

})



const ReservationModel= mongoose.model("reservations",ReservationSchema);


export default ReservationModel;


