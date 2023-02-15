import { HomeComponent } from '../pages/home/home.component';
import { RecordsComponent } from '../pages/records/records.component';
import { StatisticsComponent } from '../pages/statistics/statistics.component';

export const navRoutes = [
  {
    name: 'Home',
    path: '/',
    element: <HomeComponent/>,
  },
  {
    name: 'Records',
    path: '/records',
    element: <RecordsComponent/>,
  },
  {
    name: 'Statistics',
    path: '/statistics',
    element: <StatisticsComponent/>,
  },
];
