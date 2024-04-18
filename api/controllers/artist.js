import Artist from "../models/Artist.js";

export const createArtist = async (req,res,next)=>{
    const newArtist = new Artist(req.body);

    try {
        const savedArtist = await newArtist.save();
        res.status(200).json(savedArtist);
    } catch (err) {
        next(err);
    }
}

export const updateArtist = async (req,res,next)=>{
    try {
        const updatedArtist = await Artist.findByIdAndUpdate(req.params.id, {$set: req.body},{new: true});
        res.status(200).json(updatedArtist);
    } catch (err) {
        next(err);
    }
}

export const deleteArtist = async (req,res,next)=>{
    try {
        await Artist.findByIdAndDelete(req.params.id);
        res.status(200).json("Artist has been deleted.");
    } catch (err) {
        next(err);
    }
}

export const getArtist = async (req,res,next)=>{
    try {
        const artist = await Artist.findById(req.params.id);
        res.status(200).json(artist);
    } catch (err) {
        next(err);
    }
}

export const getArtists = async (req,res,next)=>{
    try {
        const artists = await Artist.find();
        res.status(200).json(artists);
    } catch (err) {
        next(err);
    }
}