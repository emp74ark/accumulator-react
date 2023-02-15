import { FC } from 'react';
import { NavLink } from 'react-router-dom';

export const NavComponent: FC = () => {
  return(
      <nav>
        <ul>
          <li><NavLink to={'/records'}>All records</NavLink></li>
          <li><NavLink to={'/statistics'}>Statistics</NavLink></li>
        </ul>
      </nav>
  )
}
