import React, { useState, useEffect } from 'react';
import '../styling/terminal.css';
import Terminal from './Terminal';
import { useLocation } from 'react-router-dom';
// import { useTerminalContext } from './TerminalContext';

function TerminalHandler() {
    const [terminals, setTerminals] = useState([]);
    // const location = useLocation();
    // const { history, setHistory, historyIndex, setHistoryIndex } = useTerminalContext();

    const focus = () => {
      const inputs = document.querySelectorAll('.terminal input');
      const inputNewestIndex = inputs.length - 1
      const inputNewest = inputs.item(inputNewestIndex)
      inputNewest.focus();
    };
    document.addEventListener('click', focus);
  
    const addTerminal = () => {
      setTerminals([...terminals, <Terminal key={terminals.length} searchParams={searchParams} />]);
    };
    document.addEventListener('spawnTerminalLine', addTerminal);

    function useQuery() {
      return new URLSearchParams(useLocation().search);
    }
    const searchParams = useQuery();

    useEffect(() => {
      addTerminal(); // Automatically call addTerminal when the component mounts
  }, []);


    return (
        <div>
            <div className="terminals-container">{terminals}</div>
        </div>
    )
};

export default TerminalHandler;