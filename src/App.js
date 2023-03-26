import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/home.page';
import CategoryShopPage from './pages/category-shop/category-shop.page';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<HomePage />}></Route>
        <Route
          path='/category/:category'
          element={<CategoryShopPage />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
