const mongoose = require("mongoose")
import Trip from "../../models/trip.model"

mongoose.connect("mongodb://localhost/roamio", { useNewUrlParser: true })

const trips = [
  {
    title: "Road trip along the Pacific Coast Highway",
    description: "Drive along the coast from San Francisco to San Diego",
    startDate: new Date("2022-06-01"),
    endDate: new Date("2022-06-10"),
  },
  {
    title: "Hiking in Yosemite National Park",
    description: "Explore the stunning natural beauty of Yosemite",
    startDate: new Date("2022-07-01"),
    endDate: new Date("2022-07-08"),
  },
  {
    title: "Skiing in Whistler",
    description: "Hit the slopes at one of North America's top ski resorts",
    startDate: new Date("2022-12-15"),
    endDate: new Date("2022-12-22"),
  },
]

Trip.deleteMany({})
  .then(() => {
    console.log("Collection cleared")
  })
  .catch((err: any) => console.error(err))

Trip.insertMany(trips)
  .then((docs: any) => {
    console.log("Database seeded successfully!")
    console.log(`Inserted ${docs.length} documents:`)
    console.log(docs)
    mongoose.connection.close()
  })
  .catch((err: any) => console.error(err))
