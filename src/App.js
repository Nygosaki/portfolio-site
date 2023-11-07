import React from 'react';
import TerminalHandler from './components/TerminalHandler';
import Login from './components/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TerminalProvider } from './components/TerminalContext';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/terminal" element={<TerminalProvider><TerminalHandler /></TerminalProvider>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
  

export default App;