import { UfoComponent } from '../pages/ufo/ufo.component';
import { navRoutes } from './public.routes';

export const appRoutes = [
  ...navRoutes,
  {
    path: '*',
    element: <UfoComponent/>,
  },
];
