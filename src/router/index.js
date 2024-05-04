import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '@/views/Dashboard.vue';
import PurchaseRequestsView from '@/views/PurchaseRequestsView.vue';
import PurchaseRequestDetail from '@/views/PurchaseRequestDetail.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/requests',
      name: 'PurchaseRequestsView',
      component: PurchaseRequestsView
    },
    {
      path: '/requests/:id',
      name: 'PurchaseRequestDetail',
      component: PurchaseRequestDetail,
      props: true
    }
  ]
});
