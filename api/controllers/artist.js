import Artist from "../models/Artist.js";
import Slot from "../models/Slot.js";

export const createArtist = async (req,res,next)=>{
    const artistId = req.params.artistId;
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

export const getArtists = async (req, res, next) => {
    const { min, max, limit, ...others } = req.query;
    try {
        const artists = await Artist.find({
            ...others,
            cheapestPrice: { $gt: min || 1, $lt: max || 999 },
        }).limit(parseInt(req.query.limit));
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
        const dubstepCount = await Artist.countDocuments({genre:"dubstep"});
        const drumandbassCount = await Artist.countDocuments({genre:"drumandbass"});
        const ukgCount = await Artist.countDocuments({genre:"ukg"});
        const houseCount = await Artist.countDocuments({genre:"house"});
        const technoCount = await Artist.countDocuments({genre:"techno"});

        res.status(200).json([
            {genre:"dubstep", count:dubstepCount},
            {genre:"drumandbass", count:drumandbassCount},
            {genre:"ukg", count:ukgCount},
            {genre:"house", count:houseCount},
            {genre:"techno", count:technoCount},
        ]);
    } catch (err) {
        next(err);
    }
};

export const getArtistSlots = async (req, res, next) => {
    try {
        const artist = await Artist.findById(req.params.id);
        const list = await Promise.all(artist.slots.map(slot=>{
            return Slot.findById(slot);
        })
    );
    res.status(200).json(list)
    } catch (err) {
        next(err);
    }
};
