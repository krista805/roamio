import { defineStore } from "pinia"

// define Post
interface Post {
  title: string
  description: string
}

export const useStorePosts = defineStore({
  id: "posts",
  state: (): { posts: Post[] } => ({
    posts: [
      {
        title: "First Entry",
        description: "This is the first entry.",
      },
      {
        title: "Second Entry",
        description: "This is the second entry.",
      },
    ],
  }),
  getters: {
    getPosts: (state) => state.posts,
  },
})
