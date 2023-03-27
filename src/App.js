import React, { memo } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CalculatorPage from './components/CalculatorPage';
import Quotes from './components/Quotes';
import Navbar from './components/navbar';
import Home from './components/home';

const App = memo(() => (
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/quote" element={<Quotes />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
));
App.displayName = 'Math magicians';
export default App;
