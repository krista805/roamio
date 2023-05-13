<template>
  <div v-if="trip">
    <h1>Trip Detail Page</h1>
    {{ trip }}

    <!-- TODO: Shows list of posts within a trip -->
  </div>
</template>

<script lang="ts">
/*
    Imports
*/
import { useStoreTrips } from "../../store/storeTrips"

export default defineComponent({
  async setup() {
    /*
        Router
    */
    const route = useRoute()

    /*
        Store
    */
    const storeTrips = useStoreTrips()

    await storeTrips.fetchTrip(route.params.trip_slug.toString())

    return {
      trip: storeTrips.trip,
    }
  },
})
</script>
