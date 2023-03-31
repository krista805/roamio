import express from "express"
const tripsController = require("./trips.controller")
const getAllTrips = tripsController.getAllTrips
const createTrip = tripsController.createTrip
const getTripById = tripsController.getTripById

const router = express.Router()

router.get("/", getAllTrips)
router.post("/", createTrip)
router.get("/:id", getTripById)

export default router
