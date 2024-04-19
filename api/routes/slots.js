import express from "express";
import { createSlot, deleteSlot, getSlot, getSlots, updateSlot } from "../controllers/slot.js";
import {verifyAdmin} from "../utils/verifyToken.js"

const router = express.Router();

// CREATE
router.post("/:artistid", verifyAdmin, createSlot);

// UPDATE
router.put("/:id", verifyAdmin, updateSlot);

// DELETE
router.delete("/:id/:artistid", verifyAdmin, deleteSlot);

// GET
router.get("/:id", getSlot);

// GET ALL
router.get("/", getSlots);

export default router;