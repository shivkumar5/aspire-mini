<template>
  <div class="recent-transactions">
    <div class="recent-transactions--card">
        <div class="d--fl jc--sb">
        <div class="d--fl ai--c">
          <img src="@/assets/recent-transactions.png" alt="Recent transactions" class="m--r--3">
          <p> Recent transactions</p>
        </div>  
        <img src="@/assets/down-arrow.png" alt="arrow-up" style="arrow-up">
      </div>
    </div>
      <div class="p--h--6" >
        <div class="recent-transactions--transaction">
          <div class="d--fl jc--sb">
            <div class="recent-transactions--transaction--image-container">
              <img src="@/assets/file-storage.png" alt="logo" class="recent-transactions--transaction--image">
            </div>
            <div style="d--fl fd--c">
              <p class="m--b--1 tc--b fw--semi-bold">Hamleys</p>
              <p class="recent-transactions--transaction--date">20 May 2021</p>
              <div class="d--fl m--t--3">
                <div class="recent-transactions--transaction--action-icon">
                  <img src="@/assets/business-and-finance.png" alt="">
                </div>
                <p>Refund on debit card</p>
              </div>
            </div>
          </div>
          <div class="d--fl ai--c">
            <p class="fw--bold tc--g">+ S$ 150</p>
              <img src="@/assets/next.png" alt="" class="next">
          </div>
        </div>
        <div class="recent-transactions--transaction">
          <div class="d--fl jc--sb">
            <div class="recent-transactions--transaction--image-container">
              <img src="@/assets/flights.png" alt="logo" class="recent-transactions--transaction--image">
            </div>
            <div class="d--fl fd--c">
              <p class="m--b--1 tc--b fw--semi-bold">Hamleys</p>
              <p class="recent-transactions--transaction--date">20 May 2021</p>
              <div class="d--fl m--t--3">
                <div class="recent-transactions--transaction--action-icon">
                  <img src="@/assets/business-and-finance.png" alt="">
                </div>
                <p>Refund on debit card</p>
              </div>
            </div>
          </div>
          <div class="d--fl ai--c">
              <p class="fw--bold tc--b">- S$ 150</p>
                <img src="@/assets/next.png" alt="" class="next">
          </div>
        </div>
        <div class="recent-transactions--transaction">
          <div class="d--fl jc--sb">
            <div class="recent-transactions--transaction--image-container">
              <img src="@/assets/megaphone.png" alt="logo" class="recent-transactions--transaction--image">
            </div>
            <div class="d--fl fd--c">
              <p class="m--b--1 tc--b fw--semi-bold">Hamleys</p>
              <p class="recent-transactions--transaction--date">20 May 2021</p>
              <div class="d--fl m--t--3">
                <div class="recent-transactions--transaction--action-icon">
                  <img src="@/assets/business-and-finance.png" alt="">
                </div>
                <p>Refund on debit card</p>
              </div>
            </div>
          </div>
          <div class="d--fl ai--c">
              <p class="fw--bold tc--b">- S$ 150</p>
                <img src="@/assets/next.png" alt="" class="next">
          </div>
        </div>
        <div class="recent-transactions--transaction">
          <div class="d--fl jc--sb">
            <div class="recent-transactions--transaction--image-container">
              <img src="@/assets/file-storage.png" alt="logo" class="recent-transactions--transaction--image">
            </div>
            <div class="d--fl fd--c">
              <p class="m--b--1 tc--b fw--semi-bold">Hamleys</p>
              <p class="recent-transactions--transaction--date">20 May 2021</p>
              <div class="d--fl m--t--3">
                <div class="recent-transactions--transaction--action-icon">
                  <img src="@/assets/business-and-finance.png" alt="">
                </div>
                <p>Refund on debit card</p>
              </div>
            </div>
          </div>
          <div class="d--fl ai--c">
              <p class="fw--bold tc--b">- S$ 150</p>
                <img src="@/assets/next.png" alt="" class="next">
          </div>
        </div>
      </div>
      <div class="view-all-card-transaction">
        View all card transactions
      </div>
  </div>
</template>

<script>

export default{
  name: 'RecentTransactions'
  
}
</script>
    UnitTransaction