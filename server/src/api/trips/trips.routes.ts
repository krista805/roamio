import express from "express"
const tripsController = require("./trips.controller")
const getAllTrips = tripsController.getAllTrips
const createTrip = tripsController.createTrip
const getTripBySlug = tripsController.getTripBySlug

const router = express.Router()

router.get("/", getAllTrips)
router.post("/", createTrip)
router.get("/:slug", getTripBySlug)

export default router
