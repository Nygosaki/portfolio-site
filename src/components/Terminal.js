import React, { useState } from 'react';

function Terminal({ searchParams }) {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState("");
    const [history, setHistory] = useState([]);
    const [historyIndex, setHistoryIndex] = useState(0);
  
    const handleCommand = (inputCommand) => {
      setHistory([...history, inputCommand]);
      setHistoryIndex(history.length + 1);
      console.debug("You just confirmed a command!");
      console.debug(history.length);
      console.debug(historyIndex);
      switch (inputCommand.split(' ')[0]) {
          case 'help':
            setOutput("Hey there. Sorry, but the commands are still under construction. Thank you for helping me test everything :>");
            break;
          case 'hello':
              setOutput("Hi!");
              break;
          case 'bye':
              setOutput("Bye!");
              break;
          case 'neofetch':
            setOutput("<p>I wonder how bread tastes :3</p>");
            document.title = "Oh Bread!"
            break;
          case 'cute':
            setOutput("<p>OOO THATS RIGHT, YOU ARE MY KUTE LITTELE KITTEN :3</p>");
            document.title = "Love you Ashley<3";
            break;
          default:
              setOutput('<p>Invalid command: ' + inputCommand + '</p><p>Please try running the `help` command</p>');
      }
      const eventSpawnTerminalLine = new Event('spawnTerminalLine');
      document.dispatchEvent(eventSpawnTerminalLine);
  };

    return (
        <div class="terminal">
            <label htmlFor="name">{searchParams.get('user')}@Server2 ~</label>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                autoFocus={true}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        handleCommand(input, setOutput, output, setHistory, setHistoryIndex, history, historyIndex);
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
          <div className='outputClass' dangerouslySetInnerHTML={{__html: output}}></div>
        </div>
    );
  }

export default Terminal;
