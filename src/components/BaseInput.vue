<template>
  <input
    :value="value"
    :class="{ 'error' : formError.status }"
    type="text"
    placeholder="Display URL"
    class="form__input"
  >
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';

export default class InputBase extends Vue {

}
</script>

<style lang="stylus">
// Style for all inputs (select)

.form__input
  width 100%
  box-sizing border-box
  border-radius 5px
  border 2px solid #d6d9de
  height 41px
  padding 5px 20px
  background-color transparent

  &.error
    border-color #a24a65

  &:focus
    outline none

.input__error
  padding 13px 17px
  height 45px
  width 100%
  border-radius 5px
  background-color #f6f7f9
  color #c37987
  box-sizing border-box

</style>
