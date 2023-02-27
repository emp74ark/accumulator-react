import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { navRoutes } from '../../routes/public.routes';

export const Nav: FC = () => {
  return(
      <nav>
        <ul>
          {navRoutes.map(({name, path}) => (
              <li key={path}><NavLink to={path}>{name}</NavLink></li>
          ))}
        </ul>
      </nav>
  )
}
