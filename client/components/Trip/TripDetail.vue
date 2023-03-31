<template>
  <div>
    <h1>Trip Detail Page</h1>
  </div>
</template>

<script lang="ts">
/*
    Props
*/

export default defineComponent({
  props: {
    trip: {
      type: Object,
      required: true,
    },
  },
})
</script>
