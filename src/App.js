
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddCourses from './Component/AddCourses';
import Footer from './Component/Footer';
import Login from './Component/Login';
import ManageCourses from './Component/Manage';
import OurCourses from './Component/OurCourses';
import Register from './Component/Resgister';
import UpdateCourse from './Component/UpdateCourse';
import Notfound from './Component/Notfound';
import Home from './Pages/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/courses' element={<OurCourses />}></Route>
        <Route path='/course/:id' element={<UpdateCourse />}></Route>
        <Route path='/addCourse' element={<AddCourses />}></Route>
        <Route path='/manageCourse' element={<ManageCourses />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='*' element={<Notfound />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
