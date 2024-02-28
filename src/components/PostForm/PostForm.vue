<template>
  <form @submit.prevent>
    <h3>Создание поста</h3>
    <input @input="inputTitle" class="input" type="text" placeholder="Название" v-model="title">
    <input class="input" type="text" placeholder="Описание" v-model="body">
    <button class="btn" @click="createPost">Создать пост!</button>
  </form>
</template>

<script>
export default {
  name: 'post-form'
}
</script>

<style lang="scss" scoped>
@import './postForm.scss'
</style>