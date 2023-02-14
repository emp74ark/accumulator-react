import { FC } from 'react';
import { NavComponent } from '../nav/nav.component';

export const HeaderComponent: FC = () => {
  return(
      <header>
        <a href={'/'}>
          <h1>actr</h1>
        </a>
        <NavComponent />
        <div className="appearance">Theme</div>
      </header>
  )
}
