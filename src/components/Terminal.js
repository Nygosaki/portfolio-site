import React, { useState } from 'react';
import { useTerminalContext } from './TerminalContext';

function Terminal({ searchParams }) {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState("");
    const { history, setHistory, historyIndex, setHistoryIndex } = useTerminalContext();
    // onst [history, setHistory] = useState([]);
    // const [historyIndex, setHistoryIndex] = useState(0);
  
    const handleCommand = (inputCommand) => {
      setHistory([...history, inputCommand]);
      setHistoryIndex(history.length + 1);
      console.log(history)
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
            setOutput('<p>       _,met$$$$$gg.</p><p>    ,g$$$$$$$$$$$$$$$P.</p><p>  ,g$$P"     """Y$$.".</p><p> ,$$P\'              `$$$.</p><p>\',$$P       ,ggs.     `$$b:   <span class="neofetchtext">' + searchParams.get("user") + '</span>@<span class="neofetchtext">Server2</span></p><p>`d$$\'     ,$P"\'   <span class="neofetchtext">.</span>    $$$    --------------------------------</p><p> $$P      d$\'     <span class="neofetchtext">,</span>    $$P    <span class="neofetchtext">OS</span>: Debian GNU/Linux 11 (bullseye) x86_64</p><p> $$:      $$.   <span class="neofetchtext">-</span>    ,d$$\'    <span class="neofetchtext">Host</span>: Google Compute Engine</p><p> $$;      Y$b._   _,d$P\'      <span class="neofetchtext">Kernel</span>: 6.1.42+</p><p> Y$$.    <span class="neofetchtext">`.</span>`"Y$$$$P"\'         <span class="neofetchtext">Uptime</span>: 1+ years</p><p> `$$b      <span class="neofetchtext">"-.__</span>              <span class="neofetchtext">Packages</span>: 733 (dpkg)</p><p>  `Y$$                        <span class="neofetchtext">Shell</span>: bash 5.1.4</p><p>   `Y$$.                      <span class="neofetchtext">Terminal</span>: /dev/pts/1</p><p>     `$$b.                    <span class="neofetchtext">CPU</span>: Intel Xeon (4) @ 2.199GHz</p><p>       `Y$$b.                 <span class="neofetchtext">Memory</span>: ' + (Math.floor(Math.random() * (16002 - 300 + 1)) + 300) + 'MiB / 16002MiB</p><p>          `"Y$b._</p><p>              `"""                                    </p><p>                                                      </p>');
            document.title = "Oh Bread!"
            break;
          case 'cute':
            setOutput("<p>OOO THATS RIGHT, YOU ARE MY KUTE LITTELE KITTEN :3</p>");
            document.title = "Love you Ashley<3";
            break;
          case 'intro':
            setOutput('')
            break;
          default:
              setOutput('<p>Invalid command: ' + inputCommand + '</p><p>Please try running the `help` command</p>');
      }
      const eventSpawnTerminalLine = new Event('spawnTerminalLine');
      document.dispatchEvent(eventSpawnTerminalLine);
  };

    return (
        <div class="terminal">
          <div className='horizontalAlign'>
          <p>+<br />|<br />|<br />|<br />|<br />|<br />|<br />|<br />|<br />|<br />|<br />|<br />|<br />|<br />+</p>
          <div className='intro'>
            <p>---------------------------------------------------------------------------</p>
            <div className='horizontalAlign'>
              <img src={require("../assets/pfp.png")} style={{maxWidth:"8vw", paddingLeft:"1vw"}} alt=''/>
              <p style={{paddingLeft:"1vw"}}><strong>Hey there!</strong><br />
              My name's <strong>Nygosaki</strong> <span class="descriptor">(She/Any)</span><br />
              I am a programmer, also interasted in<br />
              general IT, cybersecurity and pentesting.<br />
              Currently focusing on bots and other 'malicious' programs.<br />
              Commissions are open btw :3<br />
              </p>
              </div>
              <div className='horizontalAlign'>
              <a href='https://github.com/Nygosaki'>
              <img src={require("../assets/icoGithub.png")} className='iconSocial' style={{paddingLeft:"10vw"}} alt='Github'/>
              </a>
              <a href='https://discord.gg/sFzqJk9R7E'>
              <img src={require("../assets/icoDiscord.png")} className='iconSocial' alt='Discord'/>
              </a>
              <a href='https://www.last.fm/user/MeLikeFish'>
              <img src={require("../assets/icoLastfm.png")} className='iconSocial' alt='Last.fm'/>
              </a>
              <a href='https://www.tumblr.com/blog/melikefish'>
              <img src={require("../assets/icoTumblr.png")} className='iconSocial' alt='Tumblr'/>
              </a>
              <a href='https://steamcommunity.com/profiles/76561198433226986'>
              <img src={require("../assets/icoSteam.png")} className='iconSocial' alt='Discord'/>
              </a>
              </div>
              <p>---------------------------------------------------------------------------<br /></p>
              <div className='horizontalAlign'>
              <p style={{paddingLeft:'10vw'}}>This is a manually emulated interactive CLI.<br />
              You should run the `help` command to get started :3</p>
              </div>
              <p>---------------------------------------------------------------------------</p>
            </div>
            <p>+<br />|<br />|<br />|<br />|<br />|<br />|<br />|<br />|<br />|<br />|<br />|<br />|<br />|<br />+</p>
            </div>
            <label htmlFor="name">{searchParams.get('user')}@Server2 ~</label>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                autoFocus={true}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        handleCommand(input);
                        const inputs = document.querySelectorAll('.terminal input');
                        const inputNewestIndex = inputs.length - 1
                        const inputNewest = inputs.item(inputNewestIndex)
                        inputNewest.disabled = true;
                    } else if (e.key === 'ArrowUp') {
                      console.log("Arrow Up")
                        // Make sure that the history index is within the bounds of the history list
                        if (historyIndex !== 0) {
                          console.log("History Index within bounds")
                          setInput(history[historyIndex-1]);
                          setHistoryIndex(historyIndex - 1);
                        } else {
                          // The user is at the beginning of the history list
                        }
                      } else if (e.key === 'ArrowDown') {
                        console.log("Arrow Down")
                        // Make sure that the history index is within the bounds of the history list
                        if (historyIndex !== history.length) {
                          console.log("History Index within bounds")
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
