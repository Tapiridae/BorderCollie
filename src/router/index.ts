import VueRouter from 'vue-router';

const routes = [
  {path: '/', component: null}
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
})

export default router