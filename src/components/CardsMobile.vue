<style lang="sass">
@import './../styles/index.scss'
</style>

<template>
  <div>
    <div style="position: fixed; z-index: 1000; bottom: 0; right: 0; left: 0">
      <div
        class="d--fl jc--sb"
        style="
          background: #ffffff;
          height: 56px;
          box-shadow: 0 -3px 6px #00000014;
          padding: 8px 32px;
          text-align: center;
        "
      >
        <div>
          <img src="@/assets/Logo-mobile-bottom.png" alt="" />
          <p style="font-size: 9px; color: #dddddd">Home</p>
        </div>
        <div>
          <img src="@/assets/Card.png" alt="" />
          <p class="fw--bold tc--g fs--sm">Cards</p>
        </div>
        <div>
          <img src="@/assets/Payments-mobile-bottom.png" alt="" />
          <p style="font-size: 9px; color: #dddddd">Payments</p>
        </div>
        <div>
          <img src="@/assets/Credit-mobile-bottom.png" alt="" />
          <p style="font-size: 9px; color: #dddddd">Credit</p>
        </div>
        <div>
          <img src="@/assets/Account-mobile-bottom.png" alt="" />
          <p style="font-size: 9px; color: #dddddd">Profile</p>
        </div>
      </div>
    </div>
    <div
      style="
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background: #0c365a;
        padding: 24px;
        padding-bottom: 32px;
      "
    >
      <div class="d--fl width--100 jc--fe">
        <img src="@/assets/Logo-mobile.png" alt="" class="as--fe" />
      </div>
      <div class="d--fl jc--sb ai--c">
        <div>
          <p class="m--b--2 tc--w">Available balance</p>
          <div class="d--fl ai--c">
            <button
              style="
                background: #01d167;
                border-radius: 4px;
                border: transparent;
                height: 24px;
                width: 40px;
                margin-right: 12px;
                color: #ffffff;
              "
            >
              S$
            </button>
            <p style="font-size: 26px; font-weight: 800" class="tc--w">3,000</p>
          </div>
        </div>
        <div
          style="
            color: #23cefd;
            font-weight: bold;
            display: flex;
            align-items: center;
            padding: 8px 12px;
          "
        >
          <img
            src="@/assets/box-mobile.png"
            alt=""
            style="width: 16px; height: 16px; margin-right: 8px"
          />
          <p>New card</p>
        </div>
      </div>
      <div style="margin: 24px 0; display: flex; gap: 32px; font-size: 14px">
        <p
          style="
            color: #ffffff;
            font-weight: bold;
            border-bottom: 2px solid #23cefd;
            padding-bottom: 4px;
          "
        >
          My debit cards
        </p>
        <p style="color: #ffffff; opacity: 30%">All company cards</p>
      </div>

      <div class="d--fl jc--fe fw--bold">
        <div
          class="d--fl"
          style="
            height: 40px;
            background: #ffffff;
            margin-bottom: -16px;
            border-radius: 6px;
            padding: 4px 8px;
            z-index: -1;
          "
        >
          <img
            src="@/assets/remove_red_eye-24px.png"
            alt=""
            class="m--r--2"
            style="height: 16px"
          />
          <p class="tc--g">Show card number</p>
        </div>
      </div>
      <div class="d--fl">
        <DebitCard />
        <div
          style="
            align-self: center;
            right: -8px;
            position: absolute;
            height: 220px;
            width: 20px;
            border-radius: 12px;
            background: #536dff;
          "
        ></div>
      </div>
      <CardScroller class="m--b--4" />
    </div>
    <div style="position: relative; top: 450px">
      <PaymentActions />
      <div style="background: #ffffff; margin-top: -16px; padding-top: 24px">
        <CardDetailsCard style="margin-bottom: 24px" />
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