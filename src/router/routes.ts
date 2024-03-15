import { RouteRecordRaw } from 'vue-router';
import { ROUTES } from './master-routes';

const routes: RouteRecordRaw[] = [
  ...ROUTES,

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
