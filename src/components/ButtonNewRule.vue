<template>
  <button class="btn">
    <span class="plus">+</span>New rule
  </button>
</template>

<style lang="stylus" scoped>
.btn
  margin-top 4px
  padding 11px 27px 10px
  border 2px solid #dddee3
  border-radius 6px
  text-transform uppercase
  font-size 14px
  font-weight 500
  &:hover
    cursor pointer
    background-color #dddee3
    .plus
      color #999999

.plus
  position relative
  top -2px
  padding-right 4px
  color #c6c6c6
  font-weight 100

</style>
