<template>
  <form @submit.prevent="createRule">
    <div class="form__container">

      <div class="form__title">Type a full or partial url where you would like to display notifications.</div>

      <div
        class="form__close"
        @click="hideForm"
      >
        &times;
      </div>

      <div class="row d-flex">

        <div class="col-4">
          <BaseSelect
            :options="typeList"
            v-model="formType"
          />
        </div>

        <div class="col-8">
          <BaseInput
            v-model="formUrl"
            :error="formError"
            placeholder="Display URL"
          />
        </div>

      </div>

    </div>

    <ButtonNewRule v-if="!formError.status"/>
  </form>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Mutation } from 'vuex-class';

import ButtonNewRule from '@/components/ButtonNewRule.vue';
import BaseSelect from '@/components/BaseSelect.vue';
import BaseInput from '@/components/BaseInput.vue';

@Component({
  components: {
    ButtonNewRule,
    BaseSelect,
    BaseInput,
  },
})

export default class FormCampaignRule extends Vue {
  @Mutation('setFormNewRuleStatus') public setFormNewRuleStatus: any;
  @Mutation('addNewRule') public addNewRule: any;

  private typeList = {
    contains: 'Contains',
    exactMatch: 'Exact Match',
  };

  private placeholder: string = 'Display URL';

  private formType: string = 'contains';
  private formUrl: string = '';

  private hideForm() {
    this.setFormNewRuleStatus(false);
  }

  private isValidURL(url: string) {
    // tslint:disable-next-line
    const regex = new RegExp(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/);

    if (!regex .test(url)) {
      return false;
    }

    return true;
  }

  private createRule() {
    this.addNewRule({
      type: this.formType,
      url: this.formUrl,
    });

    this.hideForm();
  }

  get formError() {
    if (this.formUrl === '') {
      return {
        status: true,
        msg: 'URL is Missing',
      };
    }

    if (!this.isValidURL(this.formUrl)) {
      return {
        status: true,
        msg: 'URL is Incorrect',
      };
    }

    return {
      status: false,
      msg: '',
    };
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
