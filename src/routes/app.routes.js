import HomePage from '../pages/home.page';
import PortfolioPage from '../pages/portfolio.page';
import ContactPage from '../pages/contact.page';
import NotFound from '../pages/not-found.page';
import ResumePage from '../pages/resume.page';

export default [
  {
    id: 1,
    path: '/',
    exact: true,
    page: HomePage,
  },
  {
    id: 2,
    path: '/resume',
    exact: true,
    page: ResumePage,
  },
  {
    id: 3,
    path: '/portfolio',
    exact: true,
    page: PortfolioPage,
  },
  {
    id: 4,
    path: '/contact',
    exact: true,
    page: ContactPage,
  },
  {
    id: 5,
    path: '*',
    page: NotFound,
  },
];
