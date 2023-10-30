import React, { useState } from 'react';
import './terminal.css';
import Terminal from './components/Terminal';


function App() {
  const [terminals, setTerminals] = useState([]);

  const focus = () => {
    const inputs = document.querySelectorAll('.terminal input');
    const inputNewestIndex = inputs.length - 1
    const inputNewest = inputs.item(inputNewestIndex)
    inputNewest.focus();
  };
  document.addEventListener('click', focus);

  const addTerminal = () => {
    setTerminals([...terminals, <Terminal key={terminals.length} />]);
  };
  document.addEventListener('spawnTerminalLine', addTerminal);

  return (
    <div>
      <button onClick={addTerminal}>Add Terminal</button>
      <div className="terminals-container">{terminals}</div>
    </div>
  );
}
  

export default App;