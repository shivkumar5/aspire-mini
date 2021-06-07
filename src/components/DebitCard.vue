<template>
  <div class="debit-card">
    <img src="../assets/Logo-white.png" class="as--fe" alt="aspire-logo">
    <p class="debit-card--user-name ">Mark Henry</p>
    <div class="debit-card--number">
      <div class="debit-card--dot-container" v-for="i in 3" :key="i"> 
        <span class="debit-card--dot"  v-for="j in 4" :key="j"></span>
      </div>
      <p>2020</p>
    </div>
    <div class="debit-card--expiry">
      <p class="m--r--6">Thru: 12/20</p>
      <p>CVV: </p>
      <p class="debit-card--cvv">***</p>
    </div>
    <img src="../assets/VisaLogo.png" alt="Visa" class="as--fe">
  </div>
</template>

<script>
export default{
  name:'DebitCard'
}
</script>