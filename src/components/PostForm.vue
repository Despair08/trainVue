<template>
  <div>
    <form @submit.prevent>
      <h4>Создание поста</h4>
      <base-input
          v-model="post.title"
          type="text"
          placeholder="Название"/>
      <base-input
          v-model="post.body"
          type="text"
          placeholder="Описание"/>
      <base-button
          class="button--form"
          @click="createPost"
      >
        Создать
      </base-button>
    </form>
  </div>
</template>

<script>
export default {
  data(){
    return{
      post:{
        title:'',
        body:'',
      }
    }
  },
  methods:{
    createPost() {
      this.post.id = Date.now();
      this.$emit('create',this.post)
      this.post = {
      title:'',
      body: '',
      }
    }
  }

}
</script>

<style lang="scss" scoped>
@import "@/scss/components/PostForm";
</style>