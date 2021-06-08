<style lang="sass">
@import '../styles/index.scss'
</style>

<template>
  <div>
    <div class="cards-mobile--bottom-nav">
      <div class="cards-mobile--bottom-nav-container">
        <div>
          <img src="@/assets/Logo-mobile-bottom.png" alt=""/>
          <p class="cards-mobile--bottom-nav--item">Home</p>
        </div>
        <div>
          <img src="@/assets/Card.png" alt="" />
          <p class="fw--bold tc--g fs--sm">Cards</p>
        </div>
        <div>
          <img src="@/assets/Payments-mobile-bottom.png" alt="" />
          <p class="cards-mobile--bottom-nav--item">Payments</p>
        </div>
        <div>
          <img src="@/assets/Credit-mobile-bottom.png" alt="" />
          <p class="cards-mobile--bottom-nav--item">Credit</p>
        </div>
        <div>
          <img src="@/assets/Account-mobile-bottom.png" alt="" />
          <p class="cards-mobile--bottom-nav--item">Profile</p>
        </div>
      </div>
    </div>
    <div class="cards-mobile--fixed-content" >
      <div class="d--fl width--100 jc--fe">
        <img src="@/assets/Logo-mobile.png" alt="" class="as--fe"  @click="$router.push('/')" />
      </div>
      <div class="d--fl jc--sb ai--c">
        <div>
          <p class="m--b--2 tc--w">Available balance</p>
          <div class="d--fl ai--c">
            <button class="btn--available-balance">
              S$
            </button>
            <p class="tc--w available-balance">3,000</p>
          </div>
        </div>
        <div class="card-mobile--new-card" >
          <img
            src="@/assets/box-mobile.png"
            alt=""
            class="icon--new-card"
          />
          <p>New card</p>
        </div>
      </div>
      <div class="all-card-container">
        <p class="my-debit-card">
          My debit cards
        </p>
        <p class="all-company-card">All company cards</p>
      </div>

      <div class="d--fl jc--fe fw--bold">
        <div class="d--fl cards-mobile--show-card">
          <img
            src="@/assets/remove_red_eye-24px.png"
            alt=""
            class="m--r--2 cards-mobile--show-card--icon"/>
          <p class="tc--g">Show card number</p>
        </div>
      </div>
      <div class="d--fl">
        <DebitCard />
        <div
          class="cards-mobile--secondary-card"
        ></div>
      </div>
      <CardScroller class="m--b--4" />
    </div>
    <div class="cards-mobile--bottom-content">
      <PaymentActions />
      <div class="cards-mobile--bottom-content--item">
        <CardDetailsCard class="m--b--6" />
        <RecentTransactionsCard />
      </div>
    </div>
  </div>
</template>

<script>
const DebitCard = () => import("./DebitCard.vue");
const PaymentActions = () => import("./PaymentActions.vue");
const CardScroller = () => import("./CardScroller.vue");
const CardDetailsCard = () => import("./CardDetailsCard.vue");
const RecentTransactionsCard = () => import("./RecentTransactionsCard.vue");
export default {
  name: "Mobile",
  components: {
    DebitCard,
    PaymentActions,
    CardScroller,
    CardDetailsCard,
    RecentTransactionsCard,
  },
};
</script>