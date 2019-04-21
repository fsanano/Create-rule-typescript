<template>
  <div class="input__container">
    <input
      :value="value"
      :class="{ 'error' : error.status }"
      :placeholder="placeholder"
      @input="input($event.target.value)"
      type="text"
      class="form__input"
    />
    <div
      v-if="error.status"
      class="input__error"
      v-html="error.msg"
    />
  </div>
  
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class InputBase extends Vue {
  @Prop(String) private value!: string;
  @Prop(String) private placeholder!: string;
  @Prop(Object) private error!: any;

  public input(val: string) {
    this.$emit('input', val);
  }
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
