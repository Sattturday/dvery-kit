import { Route, Routes } from 'react-router-dom';

import { Home } from './pages/Home';
import { CardPage } from './pages/CardPage';
import { Catalog } from './pages/Catalog';
import { ArticlePage } from './pages/ArticlePage/ArticlePage';
import { Articles } from './pages/Articles/Articles';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/articles' element={<Articles />} />
      <Route path='/articles/:id' element={<ArticlePage />} />
      <Route path='/catalog' element={<Catalog />} />
      <Route path='/cards/:id' element={<CardPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
