<template>
  <div>
    <select
    :value="value"
    @input="input($event.target.value)"
    class="form__input"
  >
    <option
      v-for="(val, key) in options"
      :key="key"
      :value="key"
      :selected="key == value"
    >
      {{ val }}
    </option>
  </select>
  </div>
</template>

<script lang="ts">

import { Vue, Component, Prop, Emit } from 'vue-property-decorator';

@Component
export default class BaseSelect extends Vue {
  @Prop({ default: 'contains'}) private value!: string;
  @Prop() private options!: string[];

  public input(val: string) {
    this.$emit('input', val);
  }
}
</script>
