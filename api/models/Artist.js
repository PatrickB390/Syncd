import mongoose from 'mongoose';
const { Schema } = mongoose;

const ArtistSchema = new mongoose.Schema({
    name:{
       type: String,
       required:true 
    },
    genre:{
        type: String,
        required:true 
     },
     city:{
        type: String,
        required:true 
     },
     link:{
        type: String,
        required:true 
     },
     photos:{
        type: [String],
     },
     desc:{
        type: String,
        required:true 
     },
     rating:{
        type: Number,
        min:0,
        max:5 
     },
     slots:{
        type: [String],
     },
     cheapestPrice:{
        type: Number,
        required:true 
     },
     featured:{
        type: Boolean,
        default:false
     },
});

export default mongoose.model("Artist", ArtistSchema)