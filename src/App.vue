<template>
  <div class="container__wrap">
    <div class="form__row">
      <div class="h2">Where would you like to display your campaign?</div>

      <FormCampaignRule v-if="isFormNewRuleVisible"/>

      <ButtonNewRule
        v-else
        @click.native="showForm"
      />
    </div>

    <div
      v-if="!isFormNewRuleVisible"
      class="form__row"
    >
      <div class="h2">Exclusion Rules</div>
      <ButtonNewRule/>
    </div>
    
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Mutation } from 'vuex-class';

import FormCampaignRule from '@/components/FormCampaignRule.vue';
import ButtonNewRule from '@/components/ButtonNewRule.vue';

@Component({
  components: {
    FormCampaignRule,
    ButtonNewRule,
  },
})

export default class App extends Vue {
  @Mutation('setFormNewRuleStatus') public setFormNewRuleStatus: any;
  @State('isFormNewRuleVisible') public isFormNewRuleVisible!: boolean;

  private showForm() {
    this.setFormNewRuleStatus(true);
  }
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
