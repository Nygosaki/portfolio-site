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
      if (inputNewest) {
        inputNewest.focus();
      }
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
          <div className='terminal'>
          <div className='horizontalAlign'>
          <p>+<br />|<br />|<br />|<br />|<br />|<br />|<br />|<br />|<br />|<br />|<br />|<br />|<br />|<br />+</p>
          <div className='intro'>
            <p>---------------------------------------------------------------------------</p>
            <div className='horizontalAlign'>
              <img src={require("../assets/pfp.png")} style={{width:"8vw", paddingLeft:"1vw"}} alt=''/>
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
            <div className="terminals-container">{terminals}</div>
        </div>
        </div>
    )
};

export default TerminalHandler;