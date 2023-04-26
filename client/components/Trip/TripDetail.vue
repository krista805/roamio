<template>
  <div>
    <h1>Trip Detail Page</h1>
    {{ trip }}
  </div>
</template>

<script lang="ts">
/*
    Imports
*/
import { useStoreTrips } from "../../store/storeTrips"

export default defineComponent({
  props: {
    trip: {
      type: Object,
      required: true,
    },
  },

  setup() {
    const route = useRoute()
    console.log(route.params.trip_slug)

    /*
        Store
    */
    const storeTrips = useStoreTrips()

    let tripData = storeTrips.fetchTrip(route.params.trip_slug.toString())

    console.log("Trip Data" + tripData)

    return {
      trip: storeTrips.trip,
    }
  },
})
</script>
