import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './pages/Index';
import Categories from './pages/Categories';
import 'aos/dist/aos.css'; // Import AOS CSS
import AOS from 'aos';

AOS.init();

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route index element={<Home />}/>
          <Route  path="/Categories" element={<Categories />}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
