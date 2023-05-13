<template>
  <v-sheet width="300" class="mx-auto">
    <v-form fast-fail @submit.prevent>
      <v-text-field v-model="title" label="Title"></v-text-field>

      <v-text-field v-model="slug" label="Slug"></v-text-field>

      <v-text-field
        v-model="startDate"
        type="date"
        label="Start Date"
      ></v-text-field>

      <v-text-field
        v-model="endDate"
        type="date"
        label="End Date"
      ></v-text-field>

      <v-textarea v-model="description" label="Description"></v-textarea>

      <v-text-field v-model="location" label="Location"></v-text-field>

      <v-btn type="submit" block class="mt-2">Submit</v-btn>
    </v-form>
  </v-sheet>
</template>

<script setup>
const title = ref(null)
const slug = ref(null)
const startDate = ref(null)
const endDate = ref(null)
const description = ref(null)
const location = ref(null)
</script>
