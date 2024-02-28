<template>
  <div>
    <div class="post" v-for="post in posts" :key="post.id">
      <div><strong>Название: </strong> {{ post.title }}</div>
      <div><strong>Описание: </strong> {{ post.body }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'post-list',
}
</script>

<style lang="scss" scoped>
@import './postList.scss';
</style>