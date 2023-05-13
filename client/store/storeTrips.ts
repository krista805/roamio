import { TripsTripDetail } from "./../.nuxt/components.d"
import { defineStore } from "pinia"

// define Post
export interface Trip {
  id: number
  slug: string
  title: string
  location: string
  img_url?: string
  description: string
  startDate: Date
  endDate: Date
}

export const useStoreTrips = defineStore({
  id: "trips",
  state: (): { tripsList: Trip[]; trip: Trip | null } => ({
    tripsList: [],
    trip: null,
  }),
  actions: {
    async fetchTrips() {
      const response = await fetch(`http://localhost:8000/api/trips`)
      this.tripsList = await response.json()
    },
    async fetchTrip(slug: string) {
      const response = await fetch(`http://localhost:8000/api/trips/${slug}`)
      this.trip = await response.json()
    },
    // TODO: Post Trips
    async createTrip(newTrip: Trip) {
      let apiUrl = "http://localhost:8000/api/trips"
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTrip),
      })
      const trip = await response.json()
      console.log("Success", trip)
      this.tripsList.push(trip)
    },

    // TODO: Patch Trips
  },
  getters: {
    tripsArray(): Trip[] {
      return this.tripsList
    },
    currentTrip(): Trip | null {
      return this.trip
    },
  },
})
