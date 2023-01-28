import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Navbar'
import Home from './pages/Home';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/auth/register" element={<Signup/>} />
      <Route path="/auth/login" element={<Login/>} />
    </Routes>
    </>
  );
}

export default App;
