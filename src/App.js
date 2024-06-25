import logo from './logo.svg'
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Prueba from './components/Prueba';
import Login from './components/Login';
import React, { useEffect, useState } from 'react';

function App() {


  return (
    <div className="App">
     
      <Login />
        
    </div>
  );
}

export default App;
