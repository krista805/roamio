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
  state: (): { tripsList: Trip[] } => ({
    tripsList: [],
  }),
  actions: {
    async fetchTrips() {
      const response = await fetch("http://localhost:8000/api/trips")
      this.tripsList = await response.json()
    },
  },
  getters: {
    tripsArray(): Trip[] {
      return this.tripsList
    },
  },
})
