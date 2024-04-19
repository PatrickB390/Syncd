import express from "express";
import { createArtist, deleteArtist, getArtist, getArtists, updateArtist } from "../controllers/artist.js";
import {verifyAdmin} from "../utils/verifyToken.js"

const router = express.Router();

// CREATE
router.post("/", verifyAdmin, createArtist);

// UPDATE
router.put("/:id", verifyAdmin, updateArtist);

// DELETE
router.delete("/:id", verifyAdmin, deleteArtist);

// GET
router.get("/:id", getArtist);

// GET ALL
router.get("/", getArtists);

export default router;