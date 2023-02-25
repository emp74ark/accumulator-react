import { FC, useEffect, useState } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { appRoutes } from './routes/app.routes';
import { SettingsContext } from './state/settings.context';
import { EventRecord } from './interfaces';
import { DataContext } from './state/data.context';

const App: FC = () => {
  const restoredData = localStorage.actr ? JSON.parse(localStorage.actr) : []
  const [settings, changeSettings] = useState({theme: 'light'})
  const [data, setData] = useState<EventRecord[]>(restoredData)

  const themeToggle = () => {
    const theme = settings.theme === 'light' ? 'dark' : 'light'
    changeSettings({...settings, theme})
  }

  const addRecord = (record: EventRecord) => {
    setData([...data, record])
  }

  const removeRecord = (record: EventRecord) => {
    setData(data.filter(el => el.id !== record.id))
  }

  useEffect(() => {
    return () => {localStorage.setItem('actr', JSON.stringify(data))}
  })

  return (
    <>
      <BrowserRouter>
        <SettingsContext.Provider value={{theme: settings.theme, themeToggle}}>
          <Header />
          <DataContext.Provider value={{data, add: addRecord, remove: removeRecord}}>
            <main style={ settings.theme === 'light' ? {} : {color: '#f0f0f0', background: '#4d525a'} }>
              <Routes>
                { appRoutes.map(({path, element}) => (
                    <Route key={path} path={path} element={element} />
                ))}
              </Routes>
            </main>
          </DataContext.Provider>
          {/*<Footer />*/}
        </SettingsContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
