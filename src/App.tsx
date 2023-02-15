import { FC, useState } from 'react';
import './App.css';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { appRoutes } from './routes/app.routes';
import { SettingsContext } from './state/settings.context';
import { records } from './state/mock-data';
import { EventRecord } from './interfaces';
import { DataContext } from './state/data.context';

const App: FC = () => {
  const [settings, changeSettings] = useState({theme: 'light'})
  const [data, setData] = useState<EventRecord[]>(records)

  const themeToggle = () => {
    const theme = settings.theme === 'light' ? 'dark' : 'light'
    changeSettings({...settings, theme})
  }

  const addRecord = (record: EventRecord) => {
    setData([...data, record])
  }
  return (
    <>
      <BrowserRouter>
        <SettingsContext.Provider value={{theme: settings.theme, themeToggle}}>
          <HeaderComponent />
          <DataContext.Provider value={{data, add: addRecord}}>
            <main style={ settings.theme === 'light' ? {} : {color: '#f0f0f0', background: '#4d525a'} }>
              <Routes>
                { appRoutes.map(({path, element}) => (
                    <Route key={path} path={path} element={element} />
                ))}
              </Routes>
            </main>
          </DataContext.Provider>
          <FooterComponent />
        </SettingsContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
