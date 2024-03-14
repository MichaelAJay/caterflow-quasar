import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      {
        path: '/sign-up',
        name: 'Sign Up',
        component: () => import('pages/SignUp.vue'),
      },
      {
        path: '/login',
        name: 'Login',
        component: () => import('pages/Login.vue'),
      },
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('pages/Dashboard.vue'),
      },
      {
        path: '/get-started',
        name: 'Get Started',
        component: () => import('pages/GetStarted.vue'),
      },
      {
        path: '/verify-email',
        name: 'Verify Email',
        component: () => import('pages/VerifyEmail.vue'),
      },
      {
        path: '/add-organization',
        name: 'Add Organization',
        component: () => import('pages/CreateOrganization.vue'),
      },
      {
        path: '/integrations',
        name: 'Integration Home',
        component: () => import('pages/IntegrationHome.vue'),
      },
      {
        path: '/onboard',
        name: 'Onboard Assistant',
        component: () => import('pages/OnboardSetupAssistant.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
