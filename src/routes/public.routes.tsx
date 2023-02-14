import { createBrowserRouter } from 'react-router-dom';
import { HomeComponent } from '../pages/home/home.component';
import { RecordsComponent } from '../pages/records/records.component';
import { StatisticsComponent } from '../pages/statistics/statistics.component';
import { UfoComponent } from '../pages/ufo/ufo.component';

export const publicRoutes = createBrowserRouter([
  {
    path: "/",
    element: <HomeComponent />,
  },
  {
    path: "/records",
    element: <RecordsComponent />,
  },
  {
    path: "/statistics",
    element: <StatisticsComponent />,
  },
  {
    path: "*",
    element: <UfoComponent />,
  },
])
