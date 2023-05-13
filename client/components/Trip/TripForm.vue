<template>
  <v-sheet width="300" class="mx-auto">
    <v-form fast-fail @submit.prevent>
      <v-text-field v-model="trip.title" label="Title"></v-text-field>

      <v-text-field v-model="trip.slug" label="Slug"></v-text-field>

      <v-text-field
        v-model="trip.startDate"
        type="date"
        label="Start Date"
      ></v-text-field>

      <v-text-field
        v-model="trip.endDate"
        type="date"
        label="End Date"
      ></v-text-field>

      <v-textarea v-model="trip.description" label="Description"></v-textarea>

      <v-text-field v-model="trip.location" label="Location"></v-text-field>

      <v-btn type="submit" @click="submitForm" block class="mt-2">Submit</v-btn>
    </v-form>
  </v-sheet>
</template>

<script lang="ts">
/*
    Imports
*/
import { useStoreTrips } from "../../store/storeTrips"

export default defineComponent({
  name: "TripForm",

  setup() {
    const tripStore = useStoreTrips()

    const trip = ref({
      title: "",
      location: "",
      startDate: "",
      endDate: "",
      description: "",
    })
    const submitForm = async () => {
      // Send `trip` to your API using your preferred HTTP client
      console.log(trip.value)
      await tripStore.createTrip(trip)
    }
    return {
      trip,
      submitForm,
    }
  },
})
</script>
