<template>
  <div>
    <form @submit.prevent>
      <h4>Создание поста</h4>
      <BaseInput
          v-model="post.title"
          type="text"
          placeholder="Название"/>
      <BaseInput
          v-model="post.body"
          type="text"
          placeholder="Описание"/>
      <BaseButton
          class="button--form"
          @click="createPost"
      >
        Создать
      </BaseButton>
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
        console.log('!')
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