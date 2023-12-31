import { Route, Routes } from 'react-router-dom';

import { Layout } from './layouts/main';
import { Home } from './pages/Home';
import { CardPage } from './pages/CardPage';
import { Catalog } from './pages/Catalog';
import { ArticlePage } from './pages/ArticlePage';
import { NotFoundPage } from './pages/NotFoundPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/articles/:id' element={<ArticlePage />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/cards/:id' element={<CardPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
