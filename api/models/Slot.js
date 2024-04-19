import mongoose from 'mongoose';
const { Schema } = mongoose;

const SlotSchema = new mongoose.Schema({
    duration:{
       type: String,
       required:true,
    },
    price:{
        type: Number,
        required:true,
     },
     setTimes: [{number:Number, unavailableDates: {type:[Date]} }],
},
    {timestamps:true}
);

export default mongoose.model("Slot", SlotSchema)