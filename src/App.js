import React, { useState } from 'react';
import TerminalHandler from './components/TerminalHandler';
import Login from './components/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/terminal" element={<TerminalHandler />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
  

export default App;