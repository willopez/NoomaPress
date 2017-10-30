import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import NotFoundPage from '../pages/NotFoundPage';

const routes = [
  {
    path: '/',
    name: 'home',
    exact: true,
    component: HomePage,
  },
  {
    path: '/about',
    exact: true,
    component: AboutPage,
  },
  {
    path: '/contact',
    exact: true,
    component: ContactPage,
  },
  {
    path: '*',
    name: 'notfound',
    component: NotFoundPage,
  },
];

export default routes;
