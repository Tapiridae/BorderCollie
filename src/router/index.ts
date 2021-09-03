import {
  createRouter,
  createWebHashHistory,
  RouteComponent,
  Router,
} from 'vue-router';

interface IRoutes {
  path: string;
  name: string;
  component: RouteComponent;
}

const routes: Array<IRoutes> = [
  { path: '/', name: '', component: import('@/pages/Login.vue') },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/Login.vue'),
  },
  { path: '/home', name: 'Home', component: import('@/pages/Home.vue') },
];

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
