import { useState } from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About'; // Import About component
import Services from './components/Services'; // Import Services component
import Contact from './components/Contact'; // Import Contact component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
