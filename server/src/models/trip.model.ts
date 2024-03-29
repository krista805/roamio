import { Schema, model, Document } from "mongoose"

export interface ITrip extends Document {
  slug: string
  title: string
  description: string
  location: string
  startDate: Date
  endDate: Date
  // Other properties as needed
}

const TripSchema = new Schema({
  slug: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  // Other properties as needed
})

export default model<ITrip>("Trip", TripSchema)
