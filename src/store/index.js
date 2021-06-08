import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    loanDetails: [
      {
        username:'shiv',
        loanNumber:'LN1',
        totalLoanAmount:1000,
        remainingLoanAmount:900,
        remainingTerms:9,
        emi:100
      },
      {
        username:'shivam',
        loanNumber:'LN2',
        totalLoanAmount:10000,
        remainingLoanAmount:5000,
        remainingTerms:5,
        emi:1000
      }
    ]
  },
  actions:{
    payEmi: ({state,commit}, {loanNumber, amount}) => {
      const index = state.loanDetails.findIndex(loan => loan.loanNumber === loanNumber);
      console.log(amount,index)
      const loan = state.loanDetails[index];
      loan.remainingLoanAmount-=amount;
      loan.remainingTerms--;
      console.log(loan)
      commit('UpdateLoanDetails',{index, loan})
    }, 
    applyForLoan: async ({state,commit}, {loanDetail}) => {
      const loanNumber = `LN${state.loanDetails.length+1}`;
      const loan = {
        username:loanDetail.username,
        loanNumber: loanNumber,
        totalLoanAmount:loanDetail.loanAmount,
        remainingLoanAmount:loanDetail.loanAmount,
        remainingTerms:loanDetail.loanTerms,
        emi: loanDetail.loanAmount/loanDetail.loanTerms
      };
      await commit('ApplyLoan', loan);
      return loanNumber;
    },
    getLoanDetails: ({state}, {loanNumber}) => {
      return state.loanDetails.find(loan => loan.loanNumber === loanNumber)
    }
  },
  mutations: {
    UpdateLoanDetails: (state, index, loan) => {
      Vue.set(state.loanDetails, index, loan);
    },
    ApplyLoan: (state, loan) =>{
      state.loanDetails.push(loan)
    }
  }
})

export default store;