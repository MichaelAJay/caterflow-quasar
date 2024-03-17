import { RouteRecordRaw } from 'vue-router';
import { DrawerNavLinkProps } from 'src/components/DrawerNavLink.vue';

type LayoutRouteChild = RouteRecordRaw &
  DrawerNavLinkProps & {
    isUserRoute: boolean;
  };

type LayoutRoute = Omit<RouteRecordRaw, 'children' | 'components'> & {
  children: LayoutRouteChild[];
};

export const ROUTE_NAMES = {
  VisitorHome: 'Visitor Home',
  SignUp: 'Sign Up',
  Login: 'Login',
  Dashboard: 'Dashboard',
  GetStarted: 'Get Started',
  VerifyEmail: 'Verify Email',
  AddOrganization: 'Add Organization',
  IntegrationHome: 'Integration Home',
  OnboardAssistant: 'Onboard Assistant',
};

export const MAIN_LAYOUT_ROUTE: LayoutRoute = {
  path: '/',
  component: () => import('layouts/MainLayout.vue'),
  children: [
    {
      path: '',
      name: ROUTE_NAMES.VisitorHome,
      component: () => import('pages/VisitorHome.vue'),
      caption: '',
      icon: '',
      isUserRoute: false,
    },
    {
      path: 'sign-up',
      name: ROUTE_NAMES.SignUp,
      component: () => import('pages/SignUp.vue'),
      caption: '',
      icon: '',
      isUserRoute: false,
    },
    {
      path: 'login',
      name: ROUTE_NAMES.Login,
      component: () => import('pages/UserLogin.vue'),
      caption: '',
      icon: '',
      isUserRoute: false,
    },
    {
      path: 'dashboard',
      name: ROUTE_NAMES.Dashboard,
      component: () => import('pages/Dashboard.vue'),
      caption: '',
      icon: '',
      isUserRoute: false,
    },
    {
      path: 'get-started',
      name: ROUTE_NAMES.GetStarted,
      component: () => import('pages/GetStarted.vue'),
      caption: '',
      icon: '',
      isUserRoute: false,
    },
    {
      path: 'verify-email',
      name: ROUTE_NAMES.VerifyEmail,
      component: () => import('pages/VerifyEmail.vue'),
      caption: '',
      icon: '',
      isUserRoute: false,
    },
    {
      path: 'add-organization',
      name: ROUTE_NAMES.AddOrganization,
      component: () => import('pages/CreateOrganization.vue'),
      caption: '',
      icon: '',
      isUserRoute: true,
    },
    {
      path: 'integrations',
      name: ROUTE_NAMES.IntegrationHome,
      component: () => import('pages/IntegrationHome.vue'),
      caption: '',
      icon: '',
      isUserRoute: true,
    },
    {
      path: 'onboard',
      name: ROUTE_NAMES.OnboardAssistant,
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
