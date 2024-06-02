import { Link, Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import './styles/index.scss';
import { useTheme } from './providers/ThemeProvider';
import classNames from 'shared/lib/classNames';
import { MainPage } from 'pages/Main';
import { AboutPage } from 'pages/About';

enum RoutePaths {
  home = '/',
  about = '/about',
}

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', { hovered: true }, [theme])}>
      <button onClick={toggleTheme}>toggle</button>
      <Link to={RoutePaths.home}>Main</Link>
      <Link to={RoutePaths.about}>About</Link>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          <Route path={RoutePaths.home} element={<MainPage />} />
          <Route path={RoutePaths.about} element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
