<template>
    <button class="button">
      <slot></slot>
    </button>
</template>

<script>
export default {
  name:'base-button',
}
</script>

<style lang="scss" scoped>
.button{
  padding: 10px 15px;
  background-color: transparent;
  color: teal;
  border: 1px solid teal;
  cursor: pointer;
    &:active{
        background-color: teal;
        color: aliceblue;
    }
    &--form{
      align-self: flex-end;
      margin-top: 15px;
    }
}
</style>