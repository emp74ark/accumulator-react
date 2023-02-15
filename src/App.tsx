import { FC } from 'react';
import './App.css';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalContext, globalState } from './context/global.context';
import { appRoutes } from './routes/app.routes';

const App: FC = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalContext.Provider value={globalState}>
          <HeaderComponent />
          <main>
            <Routes>
              { appRoutes.map(({path, element}) => (
                  <Route key={path} path={path} element={element} />
              ))}
            </Routes>
          </main>
          <FooterComponent />
        </GlobalContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
