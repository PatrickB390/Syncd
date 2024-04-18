import express from "express";
import Artist from "../models/Artist.js";
import { createError } from "../utils/error.js";
import { createArtist, deleteArtist, getArtist, getArtists, updateArtist } from "../controllers/artist.js";

const router = express.Router();

// CREATE
router.post("/", createArtist);

// UPDATE
router.put("/:id", updateArtist);

// DELETE
router.delete("/:id", deleteArtist);

// GET
router.get("/:id", getArtist);

// GET ALL
router.get("/", getArtists);

export default router;