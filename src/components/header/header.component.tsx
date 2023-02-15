import { FC } from 'react';
import { NavComponent } from '../nav/nav.component';
import { Link } from 'react-router-dom';

export const HeaderComponent: FC = () => {
  return(
      <header>
        <Link to={'/'}>
          <h1>actr</h1>
        </Link>
        <NavComponent />
        <div className="appearance">
          <span>theme</span>
          <span>language</span>
        </div>
      </header>
  )
}
