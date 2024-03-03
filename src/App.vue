<template>
  <div class="app">
    <post-form
        @create="createPost"
    />
    <post-list
        :posts="posts"
        />
  </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
export default {
  components: {
    PostForm, PostList
  },
  data() {
    return {
      posts: [
        {id: 1, title: 'JavaScript 1', body: 'JS Универсальный язык программирования 1'},
        {id: 2, title: 'JavaScript 2', body: 'JS Универсальный язык программирования 2'},
        {id: 3, title: 'JavaScript 3', body: 'JS Универсальный язык программирования 3'},
        {id: 4, title: 'JavaScript 4', body: 'JS Универсальный язык программирования 4'},
      ]

    }

  },
  methods: {
    createPost(post) {
      this.posts.push(post);
    }
  }
}
</script>

<style lang="scss">
@import '@/scss/abstract/normalize';
@import '@/scss/components/App';
</style>