
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Component/Footer';
import Home from './Pages/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
