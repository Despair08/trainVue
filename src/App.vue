<template>
  <div class="app">
    <form @submit.prevent>
      <h4>Создание поста</h4>
      <input
          v-bind:value="title"
          @input="title = $event.target.value"
          class="input"
          type="text"
          placeholder="Название">
      <input
          v-bind:value="body"
          @input="body = $event.target.value"
          class="input"
          type="text"
          placeholder="Описание">
      <button class="button" @click="createPost">Создать</button>
    </form>
    <div class="post" v-for="post in posts" :key="post.id">
      <div><strong>Название: </strong>{{post.title}}</div>
      <div><strong>Описание: </strong>{{post.body}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      posts:[
        {id:1, title:'JavaScript 1',body:'JS Универсальный язык программирования 1'},
        {id:2, title:'JavaScript 2',body:'JS Универсальный язык программирования 2'},
        {id:3, title:'JavaScript 3',body:'JS Универсальный язык программирования 3'},
        {id:4, title:'JavaScript 4',body:'JS Универсальный язык программирования 4'},
      ],
        title:'',
      body:'',

    }

  },
  methods:{
    createPost(){
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
@import '@/scss/abstract/normalize';
@import '@/scss/components/App';
</style>