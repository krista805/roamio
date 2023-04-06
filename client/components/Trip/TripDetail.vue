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
    /*
        Store
    */
    const storeTrips = useStoreTrips()

    let tripData = storeTrips.fetchTrip(`road-trip-pacific-coast-highway`)

    console.log(tripData)

    return {
      trip: storeTrips.trip,
    }
  },
})
</script>
