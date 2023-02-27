import { UFO } from '../pages/UFO/UFO';
import { navRoutes } from './public.routes';

export const appRoutes = [
  ...navRoutes,
  {
    path: '*',
    element: <UFO/>,
  },
];
