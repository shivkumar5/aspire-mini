import Router from 'vue-router'
import Vue from 'vue'
const CardsMobile = () => import('./components/CardsMobile.vue')
const CardsDesktop = () => import('./components/CardsDesktop.vue')
Vue.use(Router);
const router = new Router({
  routes:[
    { path: '/', component: CardsDesktop},
    { path: '/mobile', component: CardsMobile },
  
  ]
})

export default router;

