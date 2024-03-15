import { DrawerNavLinkProps } from 'src/components/DrawerNavLink.vue';
import { MAIN_LAYOUT_ROUTE } from './master-routes';

export const USER_NAV_LINKS: DrawerNavLinkProps[] = [];
export const VISITOR_NAV_LINKS: DrawerNavLinkProps[] = [];

for (const child of MAIN_LAYOUT_ROUTE.children) {
  const { name, caption, icon } = child;
  if (child.isUserRoute) {
    USER_NAV_LINKS.push({ name, caption, icon });
  } else {
    VISITOR_NAV_LINKS.push({ name, caption, icon });
  }
}
