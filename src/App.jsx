import { useState } from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About'; // Import About component
import Services from './components/Services'; // Import Services component
import Contact from './components/Contact'; // Import Contact component
import Appointment from './components/Appointment'; // Import Appointments component
import Doctors from './components/Doctors';
import Login from './components/Login';
import Signup from './components/Signup';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/appointment' element={<Appointment />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
