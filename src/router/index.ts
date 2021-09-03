import {
  createRouter,
  createWebHashHistory,
  RouteComponent,
  Router,
} from 'vue-router';

interface IRoutes {
  path: string;
  name?: string;
  component: RouteComponent;
  children?: IRoutes[];
}

const routes: Array<IRoutes> = [
  { path: '/', component: import('@/pages/Login.vue') },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/Login.vue'),
  },
  {
    path: '/home',
    name: 'Home',
    children: [
      {
        path: 'calendar',
        name: 'Calendar',
        component: () => import('@/pages/Calendar.vue'),
      },
    ],
    component: () => import('@/pages/Home.vue'),
  },
  {
    path: '/:pathMath(.*)',
    name: 'PageNotFound',
    component: () => import('@/pages/PageNotFound.vue'),
  },
];

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
