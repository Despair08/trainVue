<template>
  <div>
    <div class="post">
      <div>
        <div><strong>Название: </strong>{{ post.title }}</div>
        <div><strong>Описание: </strong>{{ post.body }}</div>
      </div>
      <div class="post__btns">
        <base-button
          @click="$emit('remove',post)"
        >
            Удалить
        </base-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    post:{
      type:Object,
      required:true,
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/components/PostItem';
</style>