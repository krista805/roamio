import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import tripsRouter from "./api/trips/trips.routes"

const app = express()
const port = 8000

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost/mydatabase")

app.use("/api/trips", tripsRouter)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
