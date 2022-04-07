import './App.css';
import Hee from './login';
import { Routes, Route, Navigate } from "react-router-dom"; 
import WelcomeHome from './home';
import Register from './signup';
import Reset from './resetPass';

function App() {
  return (
    <Routes>
        <Route exact path="/login" element={<Hee />} />
        <Route exact path="/Home" element={<WelcomeHome />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/reset-password" element={<Reset />} />


        <Route path="/" element={<Navigate replace to="/login" />} />
    </Routes>
  );
}

export default App;
