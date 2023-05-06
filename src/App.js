import React from 'react';
import {   Routes, Route} from "react-router-dom";
import Navigation from './components/navigation/Navigation';
import Home from './pages/Home'
import Time from './pages/TimePage'
import Map from './pages/MapPage'

import './App.css';

function App() {
  return (
    <div >    
       
        <Navigation />
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/time' element={<Time />} />
        <Route path='/map' element={<Map />} />
        </Routes>                
      
    
    </div>
  );
}

export default App;
