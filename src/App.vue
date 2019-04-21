<template>
  <div class="container__wrap">
    <div class="form__row">
      <div class="h2">Where would you like to display your campaign?</div>
      <ButtonNewRule/>
    </div>

    <div class="form__row">
      <div class="h2">Exclusion Rules</div>
      <ButtonNewRule/>
    </div>
    
  </div>
</template>

<script lang="ts">
import Component, Vue } from 'vue-property-decorator';

import ButtonNewRule from '@/components/ButtonNewRule.vue';

@Component({
  components: {
    ButtonNewRule,
  },
})

export default class App extends Vue {
}
</script>

<style lang="stylus">

body
  font-family 'Roboto', sans-serif
  font-size 16px
  margin 0
  color #292929


.container__wrap
  padding 20px 15px


.h2
  margin-bottom 20px
  font-size 18px
  font-weight 500


.form__row
  margin-bottom 31px


</style>
