import Home from '~/pages/home';
import About from '~/pages/about';
import Dynamic from '~/pages/dynamic';
import NotFound from '~/pages/not-found';

const routes = [
  {
    path: '/',
    name: 'home',
    menu: true,
    exact: true,
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    menu: true,
    exact: true,
    component: About,
  },
  {
    path: '/:slug',
    name: 'dynamic',
    exact: true,
    component: Dynamic,
  },
  {
    path: '*',
    name: 'default',
    name: 'notfound',
    component: NotFound,
  },
];

export default routes;
