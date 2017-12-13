import Home from '~/pages/home';
import About from '~/pages/about';
import Dynamic from '~/pages/dynamic';
import NotFound from '~/pages/not-found';

const routes = [
  {
    path: '/',
    name: 'home',
    exact: true,
    component: Home,
  },
  {
    path: '/about',
    exact: true,
    component: About,
  },
  {
    path: '/:slug',
    exact: true,
    component: Dynamic,
  },
  {
    path: '*',
    name: 'notfound',
    component: NotFound,
  },
];

export default routes;
