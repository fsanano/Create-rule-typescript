<template>
  <div>
    <form class="form__container">

      <div class="form__title">Type a full or partial url where you would like to display notifications.</div>

      <div
        class="form__close"
        @click="hideForm"
      >
        &times;
      </div>

      <div class="row d-flex">

        <div class="col-4">
          <select
            v-model="formType"
            class="form__input"
          >
            <option value="contains">Contains</option>
            <option value="exact-match">Exact Match</option>
          </select>
        </div>

        <div class="col-8">
          <input
            v-model="formUrl"
            :class="{ 'error' : hasError }"
            type="text"
            placeholder="Display URL"
            class="form__input"
          >
          <div
            v-if="hasError"
            class="input__error"
          >
            URL is Missing
          </div>
        </div>

      </div>

    </form>

    <ButtonNewRule v-if="!hasError"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Mutation } from 'vuex-class';

import ButtonNewRule from '@/components/ButtonNewRule.vue';

@Component({
  components: {
    ButtonNewRule,
  },
})

export default class FormCampaignRule extends Vue {
  @Mutation('setFormNewRuleStatus') public setFormNewRuleStatus: any;

  private formType: string = '';
  private formUrl: string = '';

  private hideForm() {
    this.setFormNewRuleStatus(false);
  }

  get hasError() {
    return this.formUrl === '';
  }
}
</script>

<style lang="stylus" scoped>

.form__container
  position relative
  padding 20px
  margin-bottom 20px
  box-shadow 4px 4px 0 0 #f8f8fa
  border 1px solid #ebebed
  border-radius 6px

.form__title
  margin-bottom 17px
  font-size 14px
  color #808386

.d-flex
  display flex

.row
  margin 0
  margin-left -15px
  margin-right -15px

[class*="col-"]
  padding 0 15px

.col-4
  width 32.33%

.col-8
  width 66.66%

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

.form__close
  position absolute
  right 10px
  top 10px
  width 18px
  height 18px
  border 1px solid #acacac
  border-radius 100%
  color #acacac
  font-size 18px
  font-weight 100
  line-height 0.8
  text-align center
  &:hover
    cursor pointer

</style>
