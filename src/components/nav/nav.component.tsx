import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { navRoutes } from '../../routes/public.routes';

export const NavComponent: FC = () => {
  return(
      <nav>
        <ul>
          {navRoutes.slice(1).map(({name, path}) => (
              <li><NavLink to={path}>{name}</NavLink></li>
          ))}
        </ul>
      </nav>
  )
}
