<template>
  <div>
    <v-row>
      <v-list v-for="trip in trips" :key="trip.id">
        <v-list-item to="/dashboard">
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
              <v-card-text class="text-center">
                <div class="font-weight-bold ms-1 mb-2 text-uppercase">
                  {{ trip.title }}
                </div>
                <div>{{ trip.start_date }} - {{ trip.end_date }}</div>
              </v-card-text>
            </v-img>
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
import { defineComponent, ref } from "vue"

interface Trip {
  id: number
  title: string
  location: string
  img_url?: string
  start_date: string
  end_date: string
}

export default defineComponent({
  name: "TripList",

  setup() {
    const trips = ref<Trip[]>([
      {
        id: 1,
        title: "Trip to Portugal",
        location: "Portugal",
        start_date: "Sep 10 2015",
        end_date: "Dec 24 2015",
        img_url:
          "https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg",
      },
      {
        id: 2,
        title: "Amazing Europe",
        location: "Spain, France, Italy",
        start_date: "Sep 10 2015",
        end_date: "Dec 24 2015",
        img_url: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
      },
      {
        id: 3,
        title: "Exotic Wonders",
        location: "India",
        start_date: "Sep 10 2015",
        end_date: "Dec 24 2015",
        img_url: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
      },
    ])

    return {
      trips,
    }
  },
})
</script>
