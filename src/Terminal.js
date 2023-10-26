import React, { useState } from 'react';
import './terminal.css';


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

  return (
    <div>
      <button onClick={addTerminal}>Add Terminal</button>
      <div className="terminals-container">{terminals}</div>
    </div>
  );
}

function Terminal() {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState("test output");
    const [user, setUser] = useState('guest');
    const [host, setHost] = useState('Server2');
    const [history, setHistory] = useState([]);
    const [historyIndex, setHistoryIndex] = useState(0);
  
    return (
        <div class="terminal">
            <label htmlFor="name">{user}@{host} ~</label>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                autoFocus={true}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        handleCommand(input, setOutput, output, setUser, setHost, setHistory, setHistoryIndex, history, historyIndex);
                        const inputs = document.querySelectorAll('.terminal input');
                        const inputNewestIndex = inputs.length - 1
                        const inputNewest = inputs.item(inputNewestIndex)
                        inputNewest.disabled = true;
                    } else if (e.key === 'ArrowUp') {
                        // Make sure that the history index is within the bounds of the history list
                        if (historyIndex !== 0) {
                          setInput(history[historyIndex-1]);
                          setHistoryIndex(historyIndex - 1);
                        } else {
                          // The user is at the beginning of the history list
                        }
                      } else if (e.key === 'ArrowDown') {
                        // Make sure that the history index is within the bounds of the history list
                        if (historyIndex !== history.length) {
                          setInput(history[historyIndex +1 ]);
                          setHistoryIndex(historyIndex + 1);
                        } else {
                          // The user is at the end of the history list
                        }
                      }                }}
                  
            />
          <span class="terminal-cursor">$ </span>
          {input}
          <p>{output}</p>
        </div>
    );
  }
  
  function handleCommand(inputCommand, setOutput, output, setUser, setHost, setHistory, setHistoryIndex, history, historyIndex) {
    setHistory([...history, inputCommand]);
    setHistoryIndex(history.length + 1)
    console.debug("You just confirmed a command!")
    console.debug(history.length)
    console.debug(historyIndex)
    switch (inputCommand.split(' ')[0]) {
      case 'hello':
        setOutput("Hi!");
        break;
      case 'bye':
        setOutput("Bye!");
        break;
      case 'setuser':
        setUser(inputCommand.split(' ')[1]);
        break;
      case 'sethost':
        setHost(inputCommand.split(' ')[1]);
        break;
      default:
        setOutput('Invalid command: ' + inputCommand);
    }
  }
  

export default App;