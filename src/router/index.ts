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
  { path: '/', name: 'Home', component: import('@/App.vue') },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/Login.vue'),
  },
];

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
