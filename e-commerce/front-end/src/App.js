import './App.css';
import Nav from "./component/Nav";
import Footer from './component/Footer';
import SignUp from './component/SignUp';
import Login from './component/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateComponent from './component/PrivateComponent';
import AddProduct from './component/AddProduct';
import ProductList from './component/ProductList';
import UpdateProduct from './component/UpdateProduct';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path="/" element={<ProductList />} />
            <Route path="/add" element={<AddProduct />} />
            <Route path="/update/:id" element={<UpdateProduct />} />
            <Route path="/logout" element={<h1>Logout  component</h1>} />
            <Route path="/profile" element={<h1>Profile component</h1>} />
          </Route>
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div >
  );
}

export default App;
