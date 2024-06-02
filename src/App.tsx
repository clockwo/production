import { Link, Route, Routes } from 'react-router-dom';
import { MainAsync } from './pages/Main/Main.async';
import { AboutAsync } from './pages/About/About.async';
import { Suspense } from 'react';
import './styles/index.scss';
import { useTheme } from './theme/useTheme';
import classNames from './helpers/classNames';

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
          <Route path={RoutePaths.home} element={<MainAsync />} />
          <Route path={RoutePaths.about} element={<AboutAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
