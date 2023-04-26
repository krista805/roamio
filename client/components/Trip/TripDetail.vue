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
        Router
    */
    const route = useRoute()

    /*
        Store
    */
    const storeTrips = useStoreTrips()

    let tripData = storeTrips.fetchTrip(route.params.trip_slug.toString())

    return {
      trip: storeTrips.trip,
    }
  },
})
</script>
