import { FC, useContext } from 'react';
import { Nav } from '../Nav/Nav';
import { Link } from 'react-router-dom';
import { SettingsContext } from '../../state/settings.context';

export const Header: FC = () => {
  const {theme, themeToggle} = useContext(SettingsContext)
  return(
      <header>
        <Link to={'/'}>
          <h1>actr</h1>
        </Link>
        <Nav />
        <div className="appearance">
          <span onClick={themeToggle}>{theme}</span>
        </div>
      </header>
  )
}
