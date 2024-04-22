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

export const countByCity = async (req,res,next)=>{
    const cities = req.query.cities.split(",")
    try {
        const list = await Promise.all(cities.map(city=>{
            return Artist.countDocuments({city:city})
        }))
        res.status(200).json(list);
    } catch (err) {
        next(err);
    }
}

export const countByGenre = async (req,res,next)=>{
    try {
        const dubstepCount = await Artist.countDocuments({genre:"dubstep"})
        const drumandbassCount = await Artist.countDocuments({genre:"drumandbass"})
        const ukgCount = await Artist.countDocuments({genre:"ukg"})
        const houseCount = await Artist.countDocuments({genre:"house"})
        const technoCount = await Artist.countDocuments({genre:"techno"})

        res.status(200).json([
            {type:"dubstep", count:dubstepCount},
            {type:"drumandbass", count:drumandbassCount},
            {type:"ukg", count:ukgCount},
            {type:"house", count:houseCount},
            {type:"techno", count:technoCount},
        ]);
    } catch (err) {
        next(err);
    }
}