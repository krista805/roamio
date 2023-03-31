import { Request, Response } from "express"
//  This line imports the Trip model from a file located in the models directory of the project.
import Trip from "../../models/trip.model"

// This exports an object that contains three functions to handle HTTP requests related to the Trip resource.
module.exports = {
  // This function is an asynchronous function that handles the GET request to retrieve all the trips
  getAllTrips: async (req: Request, res: Response) => {
    try {
      const trips = await Trip.find()
      res.json(trips)
    } catch (err: any) {
      res.status(500).json({ message: err.message })
    }
  },
  // This function handles the POST request to create a new trip. It creates a new Trip object with the data provided in the request body
  createTrip: async (req: Request, res: Response) => {
    const trip = new Trip({
      title: req.body.title,
      description: req.body.description,
      image: req.body.image,
      price: req.body.price,
    })

    try {
      const newTrip = await trip.save()
      res.status(201).json(newTrip)
    } catch (err: any) {
      res.status(400).json({ message: err.message })
    }
  },
  // This function handles the GET request to retrieve a specific trip by its ID.
  getTripById: async (req: Request, res: Response) => {
    try {
      const trip = await Trip.findById(req.params.id)
      if (trip == null) {
        return res.status(404).json({ message: "Trip not found" })
      }
      res.json(trip)
    } catch (err: any) {
      res.status(500).json({ message: err.message })
    }
  },
}
