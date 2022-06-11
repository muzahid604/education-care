
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Component/Footer';
import Login from './Component/Login';
import Register from './Component/Resgister';
import Home from './Pages/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
