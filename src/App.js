import './App.css';
import Hee from './login';
import { Routes, Route, Navigate } from "react-router-dom";
import WelcomeHome from './home';
import Register from './signup';
import Reset from './resetPass';
import Dash from './dashboard';
import ProductDetails from './product';

function App() {
  return (
    <>
      
      <Routes>
        <Route exact path="/" element={<Hee />} />
        <Route exact path="login" element={<Hee />} />

        <Route exact path="register" element={<Register />} />
        <Route exact path="reset-password" element={<Reset />} />
        <Route path="/">
          <Route exact path="home" element={<WelcomeHome />} >
            <Route exact path="dashboard" element={<Dash />} />
            <Route exact path="product" element={<ProductDetails />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
