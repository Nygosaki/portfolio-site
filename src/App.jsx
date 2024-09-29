import React from 'react';
import TerminalHandler from './components/TerminalHandler';
import Login from './components/Login';
import Legal from './components/Legal';
import Cookie from './components/CookiePolicy';
import Privacy from './components/PrivacyPolicy';
import TOS from './components/TermsOfService';
import CopyrightLicense from './components/Copyright';
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
          <Route exact path="/terminal" element={<TerminalProvider><TerminalHandler /></TerminalProvider>} />
          <Route exact path="/legal" element={<Legal />} />
          <Route exact path="/legal/cookies" element={<Cookie />} />
          <Route exact path="/legal/privacy" element={<Privacy />} />
          <Route exact path="/legal/tos" element={<TOS />} />
          <Route exact path="/legal/copyright" element={<CopyrightLicense />} />
          <Route path="*" element={<p>404: No such file or directory</p>}/>
        </Routes>
      </BrowserRouter>
    </div>
    </CacheBuster>
  );
}
  

export default App;