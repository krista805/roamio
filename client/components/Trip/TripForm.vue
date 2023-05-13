<template>
  <v-sheet width="300" class="mx-auto">
    <v-form fast-fail @submit.prevent>
      <v-text-field v-model="newTrip.title" label="Title"></v-text-field>

      <v-text-field v-model="newTrip.slug" label="Slug"></v-text-field>

      <v-text-field
        v-model="newTrip.startDate"
        type="date"
        label="Start Date"
      ></v-text-field>

      <v-text-field
        v-model="newTrip.endDate"
        type="date"
        label="End Date"
      ></v-text-field>

      <v-textarea
        v-model="newTrip.description"
        label="Description"
      ></v-textarea>

      <v-text-field v-model="newTrip.location" label="Location"></v-text-field>

      <v-btn type="submit" @click="createTrip" block class="mt-2">Submit</v-btn>
    </v-form>
  </v-sheet>
</template>

<script lang="ts">
/*
    Imports
*/
import { Trip } from "../../store/storeTrips"
import { useStoreTrips } from "../../store/storeTrips"
import { useRouter } from "vue-router"

export default defineComponent({
  name: "TripForm",

  setup() {
    const router = useRouter()
    const tripStore = useStoreTrips()

    const newTrip = ref<Trip>({
      id: 0,
      slug: "",
      title: "",
      location: "",
      startDate: new Date(),
      endDate: new Date(),
      description: "",
    })

    const createTrip = async () => {
      await tripStore.createTrip(newTrip.value)
      router.push(`/trips/${newTrip.value.slug}`)
      newTrip.value = {
        id: 0,
        slug: "",
        title: "",
        location: "",
        startDate: new Date(),
        endDate: new Date(),
        description: "",
      }
    }

    return {
      newTrip,
      createTrip,
    }
  },
})
</script>
