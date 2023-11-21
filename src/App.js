import React from 'react';
import TerminalHandler from './components/TerminalHandler';
import Login from './components/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TerminalProvider } from './components/TerminalContext';
import packageInfo from '../package.json';
import CacheBuster from 'react-cache-buster';


function App() {
  return (
    <CacheBuster
    currentVersion={packageInfo.version}
    isEnabled={true} //If false, the library is disabled.
    isVerboseMode={false} //If true, the library writes verbose logs to console.
  >
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/terminal" element={<TerminalProvider><TerminalHandler /></TerminalProvider>} />
        </Routes>
      </BrowserRouter>
    </div>
    </CacheBuster>
  );
}
  

export default App;