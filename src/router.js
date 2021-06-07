import Router from 'vue-router';
import Vue from 'vue';
const CardsMobile = () => import('./components/CardsMobile.vue');
const CardsDesktop = () => import('./components/CardsDesktop.vue');
const LoanApply = () => import('./components/LoanApply.vue');
const PayLoan = () => import('./components/PayLoan');
Vue.use(Router);
const router = new Router({
  routes:[
    { path: '/', component: LoanApply},
    { path: '/pay', component: PayLoan},
    { path: '/desktop', component: CardsDesktop},
    { path: '/mobile', component: CardsMobile },
  
  ]
})

export default router;

