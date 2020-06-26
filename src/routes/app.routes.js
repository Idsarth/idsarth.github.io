import HomePage from '../pages/home.page';
import PortfolioPage from '../pages/portfolio.page';
import ContactPage from '../pages/contact.page';

export default [
  {
    id: 1,
    path: '/',
    exact: true,
    page: HomePage,
  },
  {
    id: 2,
    path: '/portfolio',
    exact: true,
    page: PortfolioPage,
  },
  {
    id: 3,
    path: '/contact',
    exact: true,
    page: ContactPage,
  },
];
