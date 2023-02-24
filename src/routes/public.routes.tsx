import { Home } from '../pages/Home/Home';
import { Records } from '../pages/Records/Records';
import { Statistics } from '../pages/Statistics/Statistics';

export const navRoutes = [
  {
    name: 'Home',
    path: '/',
    element: <Home/>,
  },
  {
    name: 'Records',
    path: '/records',
    element: <Records/>,
  },
  {
    name: 'Statistics',
    path: '/statistics',
    element: <Statistics/>,
  },
];
