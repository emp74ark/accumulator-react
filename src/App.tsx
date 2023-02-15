import { FC, useState } from 'react';
import './App.css';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { appRoutes } from './routes/app.routes';
import { SettingsContext } from './state/settings.context';

const App: FC = () => {
  const [settings, changeSettings] = useState({theme: 'light'})
  const themeToggle = () => {
    const theme = settings.theme === 'light' ? 'dark' : 'light'
    console.log('new theme', theme)
    changeSettings({...settings, theme})
  }
  return (
    <>
      <BrowserRouter>
        <SettingsContext.Provider value={{theme: settings.theme, themeToggle}}>
          <HeaderComponent />
          <main style={ settings.theme === 'light' ? {} : {color: '#f0f0f0', background: '#4d525a'} }>
            <Routes>
              { appRoutes.map(({path, element}) => (
                  <Route key={path} path={path} element={element} />
              ))}
            </Routes>
          </main>
          <FooterComponent />
        </SettingsContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
