import express from "express";
import { countByGenre, countByCity, createArtist, deleteArtist, getArtist, getArtists, updateArtist, getArtistSlots } from "../controllers/artist.js";
import {verifyAdmin} from "../utils/verifyToken.js";

const router = express.Router();

// CREATE
router.post("/", verifyAdmin, createArtist);

// UPDATE
router.put("/:id", verifyAdmin, updateArtist);

// DELETE
router.delete("/:id", verifyAdmin, deleteArtist);

// GET
router.get("/find/:id", getArtist);

// GET ALL
router.get("/", getArtists);
router.get("/countByCity", countByCity);
router.get("/countByGenre", countByGenre);
router.get("/slot/:id", getArtistSlots);

export default router;