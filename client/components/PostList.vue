<template>
  <ul>
    <li v-for="(post, index) in posts" :key="index">
      <h3>{{ post.title }}</h3>
      <p>{{ post.description }}</p>
    </li>
  </ul>
</template>

<script lang="ts">
/*
    imports
*/
import { defineComponent } from "vue"
import { useStorePosts } from "../store/storePost"

export default defineComponent({
  name: "PostList",
  setup() {
    /*
        Store
    */
    const storePosts = useStorePosts()

    return {
      posts: storePosts.posts,
    }
  },
})
</script>
