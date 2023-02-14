import { FC } from 'react';
import './App.css';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterProvider } from 'react-router-dom';
import { publicRoutes } from './routes/public.routes';

const App: FC = () => {
  return (
    <>
      <HeaderComponent />
      <main>
        <RouterProvider router={publicRoutes}></RouterProvider>
      </main>
      <FooterComponent />
    </>
  );
}

export default App;
