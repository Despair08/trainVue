<template>
  <div class="app">
    <PostForm></PostForm>
    <PostList :posts="posts"></PostList>

  </div>
</template>
<script>
import PostForm from '@/components/PostForm/PostForm.vue';
import PostList from '@/components/PostList/PostList.vue';
export default {
  components: {
    PostList,
    PostForm,
  },
  data() {
    return {
      posts: [
        { id: 1, title: 'JavaScript', body: 'Here are body of post' },
        { id: 2, title: 'JavaScript 2', body: 'Here are body of post 2' },
        { id: 3, title: 'JavaScript 3', body: 'Here are body of post 3' },
      ],
      title: '',
      body: '',
    }
  },
  methods: {
    createPost() {
      const newPost = {
        id: Date.now(),
        title: this.title,
        body: this.body,
      }
      this.posts.push(newPost);
      this.title = '';
      this.body = '';
    }
  }
}
</script>
<style lang="scss">
@import '@/scss/abstract/normalize.scss';
</style>