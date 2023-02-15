import { FC, useContext } from 'react';
import { NavComponent } from '../nav/nav.component';
import { Link } from 'react-router-dom';
import { SettingsContext } from '../../state/settings.context';

export const HeaderComponent: FC = () => {
  const {theme, themeToggle} = useContext(SettingsContext)
  return(
      <header>
        <Link to={'/'}>
          <h1>actr</h1>
        </Link>
        <NavComponent />
        <div className="appearance">
          <span onClick={themeToggle}>{theme}</span>
        </div>
      </header>
  )
}
