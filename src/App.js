import './App.css';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Admin from './pages/admin/home/Admin';
import Details from './pages/details/Detail';
import Chat from './pages/chat/Chat';
import Category from './pages/admin/category/Category';
import Dashboard from './pages/admin/home/Dashboard';
import User from './pages/admin/user/User';
import StoreOwner from './pages/admin/store/StoreOwner';
import Store from './pages/store/home/Store';
import StoreDashboard from './pages/store/home/StoreDashboard';
import ListProduct from './pages/store/product/ListProducts';
import ShoppingCart from './pages/cartItems/ShoppingCart';
import Search from './pages/search/Search';


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/login" element={<Login />} />
      <Route path="/detail" element={<Details />} />
      <Route path="/cart" element={<ShoppingCart />} />
      <Route path="/admin" element={<Admin />} >
        <Route path='' element={<Dashboard />} />
        <Route path='category' element={<Category />} />
        <Route path='user' element={<User />} />
        <Route path='storeowner' element={<StoreOwner />} />
      </Route>
      <Route path="/store" element={<Store />} >
        <Route path='' element={<StoreDashboard />} />
        <Route path='listproduct' element={<ListProduct />} />
      </Route>
    </Routes>
  );
}

export default App;