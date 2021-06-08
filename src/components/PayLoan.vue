<style lang="sass">
  @import '../styles/index.scss'
</style>
<template>
    <div class="loan-apply">
      <img src="@/assets/Logo.png" alt="" @click="$router.push('/')">

      <div class="form-container m--t--10">
        <div class="loan-details" v-if="loanDetails && loanDetails.loanNumber">
          <h1>Loan Details</h1>
          <p>Username : {{loanDetails.username}}</p>
          <p>Loan Number : {{loanDetails.loanNumber}}</p>
          <p>Total Loan Amount : {{loanDetails.totalLoanAmount}}</p>
          <p>Remaining Loan Amount : {{loanDetails.remainingLoanAmount}}</p>
          <p>Remaining Terms : {{loanDetails.remainingTerms}} weeks</p>
          <p>EMI : {{loanDetails.emi}} rupees per week</p>
          <button type="button" :disabled="!loanDetails.remainingLoanAmount || !loanDetails.remainingTerms" class="btn-pay btn-pay--emi" @click="payEmiAmount">Pay EMI</button>
        </div>
        <div class="d--fl fd--c">
         <input type="text" class="form--input" placeholder="Enter your Loan number" v-model="loanNumber">
          <button class="btn-submit m--t--4" @click="searchLoan">Search User</button>
        </div>
      </div>
    </div>

</template>

<script>
import {mapActions} from 'vuex';
export default{
  name:'PayLoan',
  data () {
    return {
      loanDetails:null,
      loanNumber:''
    }
  },
  methods:{
    ...mapActions(['getLoanDetails','payEmi']),
    async searchLoan () {
      this.loanDetails = await this.getLoanDetails({loanNumber:this.loanNumber})
    },
    async payEmiAmount () {
      console.log('ok')
      await this.payEmi({loanNumber:this.loanNumber, amount: this.loanDetails.emi});
      this.loanDetails = await this.getLoanDetails({loanNumber:this.loanNumber})
    }
  }
}
</script>