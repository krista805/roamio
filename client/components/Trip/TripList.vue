<template>
  <div>
    <v-row>
      <v-list v-for="trip in tripsArray" :key="trip.id">
        <v-list-item
          :to="{ name: 'trips-trip_slug', params: { trip_slug: trip.slug } }"
        >
          <v-card width="400">
            <v-img height="200" :src="trip.img_url" cover class="text-white">
              <v-toolbar color="rgba(0, 0, 0, 0)" theme="dark">
                <template v-slot:append>
                  <v-menu>
                    <template v-slot:activator="{ props }">
                      <v-btn icon="mdi-dots-vertical" v-bind="props"></v-btn>
                    </template>

                    <v-list>
                      <v-list-item>
                        <v-list-item-title>Test</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </template>
              </v-toolbar>
            </v-img>
            <v-card-text class="text-center">
              <div class="font-weight-bold ms-1 mb-2 text-uppercase font-dark">
                {{ trip.title }}
              </div>
              <div>{{ trip.startDate }} - {{ trip.endDate }}</div>
              <nuxt-link :to="`/trips/${trip.slug}`">View Trip</nuxt-link>
            </v-card-text>
          </v-card>
        </v-list-item>
      </v-list>
    </v-row>
  </div>
</template>

<script lang="ts">
/*
    Imports
*/
import { useStoreTrips } from "../../store/storeTrips"

export default defineComponent({
  name: "TripList",

  setup() {
    const storeTrips = useStoreTrips()

    storeTrips.fetchTrips()

    const tripsArray = computed(() => storeTrips.tripsArray)
    return {
      tripsArray,
    }
  },
})
</script>
