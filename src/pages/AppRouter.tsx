import { Routes, Route } from 'react-router-dom';
import { Hero } from 'components';
import { ROUTES } from 'data';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={ROUTES.home} element={<Hero />} />
    </Routes>
  );
};
