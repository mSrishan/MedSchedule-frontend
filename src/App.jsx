import { useState } from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About'; // Import About component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
