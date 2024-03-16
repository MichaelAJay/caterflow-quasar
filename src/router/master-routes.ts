import { RouteRecordRaw } from 'vue-router';
import { DrawerNavLinkProps } from 'src/components/DrawerNavLink.vue';

type LayoutRouteChild = RouteRecordRaw &
  DrawerNavLinkProps & {
    isUserRoute: boolean;
  };

type LayoutRoute = Omit<RouteRecordRaw, 'children' | 'components'> & {
  children: LayoutRouteChild[];
};

export const MAIN_LAYOUT_ROUTE: LayoutRoute = {
  path: '/',
  component: () => import('layouts/MainLayout.vue'),
  children: [
    {
      path: '',
      name: 'Visitor Home',
      component: () => import('pages/VisitorHome.vue'),
      caption: '',
      icon: '',
      isUserRoute: false,
    },
    {
      path: 'sign-up',
      name: 'Sign Up',
      component: () => import('pages/SignUp.vue'),
      caption: '',
      icon: '',
      isUserRoute: false,
    },
    {
      path: 'login',
      name: 'Login',
      component: () => import('pages/Login.vue'),
      caption: '',
      icon: '',
      isUserRoute: false,
    },
    {
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('pages/Dashboard.vue'),
      caption: '',
      icon: '',
      isUserRoute: false,
    },
    {
      path: 'get-started',
      name: 'Get Started',
      component: () => import('pages/GetStarted.vue'),
      caption: '',
      icon: '',
      isUserRoute: false,
    },
    {
      path: 'verify-email',
      name: 'Verify Email',
      component: () => import('pages/VerifyEmail.vue'),
      caption: '',
      icon: '',
      isUserRoute: false,
    },
    {
      path: 'add-organization',
      name: 'Add Organization',
      component: () => import('pages/CreateOrganization.vue'),
      caption: '',
      icon: '',
      isUserRoute: true,
    },
    {
      path: 'integrations',
      name: 'Integration Home',
      component: () => import('pages/IntegrationHome.vue'),
      caption: '',
      icon: '',
      isUserRoute: true,
    },
    {
      path: 'onboard',
      name: 'Onboard Assistant',
      component: () => import('pages/OnboardSetupAssistant.vue'),
      caption: '',
      icon: '',
      isUserRoute: true,
    },
  ],
};

const LAYOUT_ROUTES = [MAIN_LAYOUT_ROUTE];
export const ROUTES: RouteRecordRaw[] = LAYOUT_ROUTES.map((route) => ({
  ...route,
  children: route.children.map(({ path, name, component }) => ({
    path,
    name,
    component: component || (() => import('pages/ErrorNotFound.vue')),
  })),
}));
