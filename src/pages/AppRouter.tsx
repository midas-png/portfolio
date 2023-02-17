import { Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import { ROUTES } from 'data';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={ROUTES.home} element={<Home />} />
    </Routes>
  );
};
