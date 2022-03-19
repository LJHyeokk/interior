import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Product from './pages/Product/Product';
import Detail from './pages/Detail/Detail';
import Write from './pages/Write/Write';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/product" element={<Product />} />
        <Route path="/detail/:detail" element={<Detail />} />
        <Route path="/admin/write" element={<Write />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
