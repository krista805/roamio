import { defineStore } from "pinia"

// define Post
interface Trip {
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
      const response = await fetch("http://localhost:8000/api/trips")
      this.tripsList = await response.json()
    },
    async fetchTrip(slug: string) {
      const response = await fetch(`http://localhost:8000/api/trips/${slug}`)
      this.trip = await response.json()
    },
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
