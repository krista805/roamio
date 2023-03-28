<template>
  <div>
    <h2>{{ title }}</h2>
  </div>
</template>

<script lang="ts">
/*
    imports
*/
import { defineComponent } from "vue"

export default defineComponent({
  name: "TextEditor",
  // type inference enabled
  props: {
    title: String,
  },
  setup(props) {
    props.title // type: string | undefined
  },
})

// let x: string
// x = "2"
// console.log((x = 2))

/*
    props
*/
// const props = defineProps({
//   title: {
//     type: String,
//     default: "No title specified",
//   },
// })
</script>
