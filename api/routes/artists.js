import express from "express";
import Artist from "../models/Artist.js";

const router = express.Router();

// CREATE
router.post("/", async (req, res) => {
    const newArtist = new Artist(req.body);

    try {
        const savedArtist = await newArtist.save();
        res.status(200).json(savedArtist);
    } catch (err) {
        res.status(500).json(err);
    }
});

// UPDATE
// DELETE
// GET
// GET ALL

export default router;