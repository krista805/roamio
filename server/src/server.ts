import dotenv from "dotenv"
import express, { Application, Request, Response, NextFunction } from "express"
import cors from "cors"
import bodyParser from "body-parser"
import mongoose from "mongoose"

dotenv.config()
const app: Application = express()

app.use(cors())
app.use(bodyParser.json())

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const db = mongoose.connection
db.on("error", console.error.bind(console, "connection error:"))
db.once("open", () => {
  console.log("Connected to MongoDB")
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})
