import {
  createRouter,
  createWebHashHistory,
  RouteComponent,
  Router,
} from 'vue-router';

const routes = [
  { path: '/', name: 'Home', component: null },
  // { path: '/login', name: 'Login',component: () => import('Pages') }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
