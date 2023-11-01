import React, { useState } from 'react';
import '../styling/terminal.css';
import Terminal from './Terminal';
import {Route, Link, Routes, useLocation, BrowserRouter} from 'react-router-dom';

function TerminalHandler() {
    const [terminals, setTerminals] = useState([]);
    const location = useLocation();

    const focus = () => {
      const inputs = document.querySelectorAll('.terminal input');
      const inputNewestIndex = inputs.length - 1
      const inputNewest = inputs.item(inputNewestIndex)
      inputNewest.focus();
    };
    document.addEventListener('click', focus);
  
    const addTerminal = () => {
      setTerminals([...terminals, <Terminal key={terminals.length} searchParams={searchParams}/>]);
    };
    document.addEventListener('spawnTerminalLine', addTerminal);

    function useQuery() {
      return new URLSearchParams(useLocation().search);
    }
    const searchParams = useQuery();
    console.log(searchParams);
    console.log(searchParams.get('user'));


    return (
        <div>
            <button onClick={addTerminal}>Add Terminal</button>
            <div className="terminals-container">{terminals}</div>
        </div>
    )
};

export default TerminalHandler;