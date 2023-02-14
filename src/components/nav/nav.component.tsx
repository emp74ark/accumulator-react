import { FC } from 'react';

export const NavComponent: FC = () => {
  return(
      <nav>
        <ul>
          <li><a href={'/records'}>All records</a></li>
          <li><a href={'/statistics'}>Statistics</a></li>
        </ul>
      </nav>
  )
}
