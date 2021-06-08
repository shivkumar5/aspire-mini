<style lang="sass">
  @import './../styles/index.scss';
</style>

<template>
  <div class="loan-apply">
    <div class="d--fl jc--sb">
      <img src="@/assets/Logo.png" alt="">
      <button @click="$router.push('/pay')" class="btn-pay">Pay Loan</button>
    </div>
    <h1 style="text-align:center">
      Apply For Loan
    </h1>
    <div class="form-container">
      <input type="text" class="form--input" v-model="loanDetails.username" placeholder="Enter your name">
      <input type="number" class="form--input" v-model="loanDetails.loanAmount" placeholder="Enter Loan Amount">
      <input type="number" class="form--input" v-model="loanDetails.loanTerms" placeholder="Number of weeks">
      <input type="button" value="Submit" class="btn-submit" @click="applyLoan">
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
export default{
  name: 'LoanApply',
  data () {
    return {
      loanDetails: {
        username:'',
        loanAmount:'',
        loanTerms:''
      }
    }
  },
  methods:{
    ...mapActions(['applyForLoan']),
    async applyLoan() {
      const loanNumber = await this.applyForLoan({
       loanDetail:this.loanDetails
      });
      confirm(`Your loan application is being processed. Your loan number is ${loanNumber}`)
      this.$router.push('/pay')
    }
  }
}
</script>