import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Product from './pages/Product/Product';
import Detail from './pages/Detail/Detail';
import Write from './pages/Write/Write';
import Login from './pages/Login/Login';
import Edit from './pages/Edit/Edit';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/product" element={<Product />} />
        <Route path="/detail/:detail" element={<Detail />} />
        <Route path="/admin" element={<Login />} />
        <Route path="/admin/write" element={<Write />} />
        <Route path="/admin/write/:id" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
