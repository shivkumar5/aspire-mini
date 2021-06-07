<style lang="scss">
  @import '../styles/index.scss';
</style>
<template>
  <div class="cards-desktop">
    <SideNav/>
    <div class="content">
        <div class="d--fl jc--sb ai--c">
          <div>
             <p class="m--b--2 tc--b">Available balance</p>
             <div class="d--fl ai--c">
              <button class="btn--available-balance">S$</button>
              <p class="available-balance">3,000</p>
             </div>
          </div>
          <div>
            <button class="btn--new-card">
              <img src="@/assets/box.png" alt="" class="icon--new-card">
              <p>New card</p> 
              </button>
          </div>
        </div>
        <div class="all-card-container"> 
            <p class="my-debit-card">My debit cards</p>
             <p class="all-company-card">All company cards</p>
        </div>

        <div class="layout-container">
          
          <div class="p--h--10 width--100">
            <div  class="d--fl jc--fe m--b--2 fw--bold">
              <img src="@/assets/remove_red_eye-24px.png" alt="" class="m--r--2">
              <p class="tc--g">Show card number</p>
            </div>
            <DebitCard />
            <CardScroller/>
           <PaymentActions/>
          </div>

          <div class="width--100">
            <CardDetailsCard class="m--v--7"/>
            <RecentTransactionsCard/>
          </div>
        </div>
    </div>
  </div>
</template>

<script>

const SideNav = () => import('./SideNav.vue');
const DebitCard = () => import('./DebitCard.vue');
const PaymentActions = () => import('./PaymentActions.vue');
const CardScroller = () => import('./CardScroller.vue');
const CardDetailsCard = () => import('./CardDetailsCard.vue');
const RecentTransactionsCard = () => import('./RecentTransactionsCard.vue')
export default {
  name: 'CardsDesktop',
  components:{
    SideNav,
    DebitCard,
    PaymentActions,
    CardScroller,
    CardDetailsCard,
    RecentTransactionsCard
  }
}
</script>

