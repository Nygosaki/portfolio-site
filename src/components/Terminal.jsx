import React, { useState } from 'react';
import { useTerminalContext } from '@src/components/TerminalContext';

function Terminal({ searchParams }) {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState("");
    const [cursorVisible, setCursorVisible] = useState(true);
    const { history, setHistory, historyIndex, setHistoryIndex } = useTerminalContext();
    const [user, setUser] = useState(searchParams.get("user").replace(/[&<>"'`/$=\\]/g, function(s) {
      return {
          '&': '',
          '<': '',
          '>': '',
          '"': '',
          "'": '',
          '`': '',
          '/': '',
          '$': '',
          '=': '',
          '\\': ''
      }[s];
  }));
    // onst [history, setHistory] = useState([]);
    // const [historyIndex, setHistoryIndex] = useState(0);

  
    //TODO add file system
    const handleCommand = (inputCommand) => {
      setHistory([...history, inputCommand]);
      setHistoryIndex(history.length + 1);
      console.log(history)
      let sanitizedInput = inputCommand.replace(/[&<>"'`/$=\\]/g, function(s) {
        return {
            '&': '',
            '<': '',
            '>': '',
            '"': '',
            "'": '',
            '`': '',
            '/': '',
            '$': '',
            '=': '',
            '\\': ''
        }[s];
    });
      switch (sanitizedInput.split(' ')[0]) {
          case 'help':
            switch (sanitizedInput.split(' ')[1]) {
              case 'blahaj':
                setOutput('<p><b>NAME</b><br />      <b>blahaj</b> - Gay sharks at your local terminal<br /><br /><b>SYNOPSIS</b><br />      <b>blahaj</b> [color]<br /><br /><b>DESCRIPTION</b><br />      Apart from a cute cuddly shark plushie from IKEA, BLÅHAJ is a lolcat-like CLI tool that colorizes your input, shows flags and prints colorful sharks! <br />      It has a wide variety of flags/colors to choose from and many options.<br /><br />      The following color options are available:<br /><br />      trans        - light blue, pink, white, pink, light blue<br />      abrosexual   - green, mint, white, pink, red pink<br />      agender      - black, grey, white, light green, white, grey, black<br />      ambiamorous  - blue, blue, dark blue, dark purple, black, black, dark red, red, light red, light red<br />      aroace       - orange, yellow, white, light blue, dark blue<br />      gay          - dark green, light green, mint, white, light blue, purple, dark purple<br />      ace          - black, grey, white, purple<br />      aro          - green, light green, white, grey, black<br />      bi           - pink, pink, purple, blue, blue<br />      genderfluid  - pink, white, purple, black, blue<br />      genderqueer  - purple, white, green<br />      nb           - yellow, white, purple, black<br />      omnisexual   - pink, dark pink, black, dark blue, light purple<br />      bigender     - pink, light pink, light purple, white, light purple, light blue, dark blue<br />      pansexual    - pink, yellow, blue<br />      pangender    - yellow, light pink, light pink, white, light pink, light pink, yellow<br />      pride        - red, orange, yellow, green, blue, purple<br />      philadelphia - black, brown, red, orange, yellow, green, blue, purple<br />      plural       - dark purple, light purple, blue, green, cream<br />      polysexual   - pink, green, blue<br />      progress     - white, pink, light blue, brown, black, red, orange, yellow, green, blue, purple<br />      lesbian      - red, orange, peach, white, pink, dark pink, dark red<br />      queer        - black, light blue, blue, green, white, yellow, red, pink, black<br />      demigender   - grey, light grey, yellow, white, yellow, light grey, grey<br />      demiboy      - grey, light grey, light blue, white, light blue, light grey, grey<br />      demigirl     - grey, light grey, pink, white, pink, light grey, grey<br />      bear         - dark brown, orange, yellow, cream, white, grey<br />      xenogender   - pink, light pink, orange, yellow, light blue, purple, dark purple<br />      femboy       - pink, light pink, white, light blue, white, light pink, pink<br />      genderfae    - green, mint, light yellow, white, pink, purple, dark purple<br />      graysexual   - dark purple, grey, white, grey, dark purple</p>')
                break;
              default:
                setOutput(`<p class="helpTitle"><b>-General Commands Manual-</b></p><p>    help    - <i>See this list</i><br />commissions - <i>Print information about programming commissions</i><br />     ls     - <i>List information about files</i><br />    open    - <i>Concatenate and print (display) the content of files</i><br />  neofetch  - <i>Print a neofetch of the server</i><br />   blahaj   - <i>Print a blahaj with the appropriate colours. Run 'help blahaj' for syntax info</i><br />   credits  - <i>see who helped in the creation of this website</i><br />   legal    - <i>View regulatory documents</i><br /></p><br /><p class="helpTitle"><b>-Notice Board-</b><br />To the person DDoSing my site:<br />Why? I have the money, its just annoying.<br />Awww is somebody scared of femboys and queer people? :3c</p>`);
            }
            break;
          case 'credits':
            setOutput(`
            <div class="horizontalAlign">
              <img src="ashley.jpeg" class='credits'/>
              <p>Thanks to:<br />My beautiful girlfriend, <a href=https://github.com/Ash-does-stuff>Ash-does-stuff</a><br />For helping with some css,<br />teaching me a lot of JS,<br />and coming up with good suggestions :></p>
            </div>
            `);   
            document.title = "Love you Ashley<3";       
            break;
          case 'commissions':
              setOutput("<p>If you want to comission some app (or most likely botting tools), my rates are $10 per hour of work. <a href=https://discord.gg/sFzqJk9R7E>Contact me on Discord</a> for further details.</p>");
              break;
          case 'neofetch':
            setOutput('<p>       _,met$$$$$gg.</p><p>    ,g$$$$$$$$$$$$$$$P.</p><p>  ,g$$P"     """Y$$.".</p><p> ,$$P\'              `$$$.</p><p>\',$$P       ,ggs.     `$$b:   <span class="neofetchtext">' + user + '</span>@<span class="neofetchtext">Server2</span></p><p>`d$$\'     ,$P"\'   <span class="neofetchtext">.</span>    $$$    --------------------------------</p><p> $$P      d$\'     <span class="neofetchtext">,</span>    $$P    <span class="neofetchtext">OS</span>: Debian GNU/Linux 11 (bullseye) x86_64</p><p> $$:      $$.   <span class="neofetchtext">-</span>    ,d$$\'    <span class="neofetchtext">Host</span>: Google Compute Engine</p><p> $$;      Y$b._   _,d$P\'      <span class="neofetchtext">Kernel</span>: 6.1.42+</p><p> Y$$.    <span class="neofetchtext">`.</span>`"Y$$$$P"\'         <span class="neofetchtext">Uptime</span>: 1+ years</p><p> `$$b      <span class="neofetchtext">"-.__</span>              <span class="neofetchtext">Packages</span>: 733 (dpkg)</p><p>  `Y$$                        <span class="neofetchtext">Shell</span>: bash 5.1.4</p><p>   `Y$$.                      <span class="neofetchtext">Terminal</span>: /dev/pts/1</p><p>     `$$b.                    <span class="neofetchtext">CPU</span>: Intel Xeon (4) @ 2.199GHz</p><p>       `Y$$b.                 <span class="neofetchtext">Memory</span>: ' + (Math.floor(Math.random() * (16002 - 300 + 1)) + 300) + 'MiB / 16002MiB</p><p>          `"Y$b._</p><p>              `"""                                    </p><p>                                                      </p>');
            document.title = "Oh Bread!"
            break;
          case 'legal':
            setOutput(`<p><a href='/legal/cookies'>CookiePolicy</a></p><p><a href='/legal/privacy'>PrivacyPolicy</a></p><p><a href='/legal/tos'>TermsOfService</a></p><p><a href='/legal/copyright'>Copyright</a></p>`);       
            break;
          case 'blahaj':
            let c1
            let c2
            let c3
            let c4
            let c5
            switch (sanitizedInput.split(' ')[1]) {
              case 'trans':
                c1 = "#5BCEFA"
                c2 = "#F5A9B8"
                c3 = "#FFFFFF"
                c4 = "#F5A9B8"
                c5 = "#5BCEFA"
                break;
              case 'abrosexual':
                c1 = "#76CB93"
                c2 = "#B4E4CB"
                c3 = "#FCFEFF"
                c4 = "#E896B4"
                c5 = "#DB426C"
                break;
              case 'agender':
                c1 = "#000000"
                c2 = "#B9B9B9"
                c3 = "#FFFFFF"
                c4 = "#B8F483"
                c5 = "#FFFFFF"
                break;
              case 'ambiamorous':
                c1 = "#4646C3"
                c2 = "#4646C3"
                c3 = "#36368C"
                c4 = "#272754"
                c5 = "#181818"
                break;
              case 'aroace':
                c1 = "#E38D00"
                c2 = "#EDCE00"
                c3 = "#FFFFFF"
                c4 = "#62B0DD"
                c5 = "#1A3555"
                break;
              case 'gay':
                c1 = "#118C70"
                c2 = "#2DCDA9"
                c3 = "#97E7C0"
                c4 = "#EFEFFF"
                c5 = "#7AACE1"
                break;
              case 'ace':
                c1 = "#000000"
                c2 = "#A3A3A3"
                c3 = "#FFFFFF"
                c4 = "#800080"
                c5 = "#FFFFFF"
                break;
              case 'aro':
                c1 = "#3DA542"
                c2 = "#A7D379"
                c3 = "#FFFFFF"
                c4 = "#A9A9A9"
                c5 = "#000000"
                break;
              case 'bi':
                c1 = "#D60270"
                c2 = "#D60270"
                c3 = "#9B4F96"
                c4 = "#0038A8"
                c5 = "#0038A8"
                break;
              case 'genderfluid':
                c1 = "#FF75A2"
                c2 = "#FFFFFF"
                c3 = "#BE18D6"
                c4 = "#000000"
                c5 = "#333EBD"
                break;
              case 'genderqueer':
                c1 = "#B57EDC"
                c2 = "#FFFFFF"
                c3 = "#4A8123"
                c4 = "#FFFFFF"
                c5 = "#B57EDC"
                break;
              case 'nb':
                c1 = "#FFF430"
                c2 = "#FFFFFF"
                c3 = "#9C59D1"
                c4 = "#000000"
                c5 = "#FFF430"
                break;
              case 'omnisexual':
                c1 = "#CC6687"
                c2 = "#C51A73"
                c3 = "#000000"
                c4 = "#221E7F"
                c5 = "#5E5BAF"
                break;
              case 'bigender':
                c1 = "#C57AA3"
                c2 = "#EEA7CE"
                c3 = "#D6C8E9"
                c4 = "#FFFFFF"
                c5 = "#9BC8E9"
                break;
              case 'pansexual':
                c1 = "#FF218C"
                c2 = "#FFD800"
                c3 = "#21B1FF"
                c4 = "#FFD800"
                c5 = "#FF218C"
                break;
              case 'pangender':
                c1 = "#FFF798"
                c2 = "#FFDDCD"
                c3 = "#FFEBFB"
                c4 = "#FFFFFF"
                c5 = "#FFDDCD"
                break;
              case 'pride':
                c1 = "#E40303"
                c2 = "#FF8C00"
                c3 = "#FFED00"
                c4 = "#008026"
                c5 = "#004DFF"
                break;
              case 'philadelphia':
                c1 = "#000000"
                c2 = "#784F17"
                c3 = "#E40303"
                c4 = "#FF8C00"
                c5 = "#FFED00"
                break;
              case 'plural':
                c1 = "#33052A"
                c2 = "#704884"
                c3 = "#8584C6"
                c4 = "#94C3B1"
                c5 = "#F3EDBD"
                break;
              case 'polysexual':
                c1 = "#F61BB9"
                c2 = "#07D669"
                c3 = "#1C92F5"
                c4 = "#07D669"
                c5 = "#F61BB9"
                break;
              case 'progress':
                c1 = "#FFFFFF"
                c2 = "#F5A9B8"
                c3 = "#5BCEFA"
                c4 = "#784F17"
                c5 = "#000000"
                break;
              case 'lesbian':
                c1 = "#D52D00"
                c2 = "#EF7627"
                c3 = "#FF9A56"
                c4 = "#FFFFFF"
                c5 = "#D162A4"
                break;
              case 'queer':
                c1 = "#000000"
                c2 = "#99D9EA"
                c3 = "#00A2E8"
                c4 = "#B5E61D"
                c5 = "#FFFFFF"
                break;
              case 'demigender':
                c1 = "#808080"
                c2 = "#C5C5C5"
                c3 = "#FBFF75"
                c4 = "#FFFFFF"
                c5 = "#FBFF75"
                break;
              case 'demiboy':
                c1 = "#7F7F7F"
                c2 = "#C3C3C3"
                c3 = "#9AD9EA"
                c4 = "#FFFFFF"
                c5 = "#9AD9EA"
                break;
              case 'demigirl':
                c1 = "#7F7F7F"
                c2 = "#C3C3C3"
                c3 = "#FEAEC9"
                c4 = "#FFFFFF"
                c5 = "#FEAEC9"
                break;
              case 'bear':
                c1 = "#623804"
                c2 = "#D56300"
                c3 = "#FEDD63"
                c4 = "#FEE6B8"
                c5 = "#FFFFFF"
                break;
              case 'xenogender':
                c1 = "#FC6692"
                c2 = "#FD9998"
                c3 = "#FEB782"
                c4 = "#FCFEA6"
                c5 = "#84BBFF"
                break;
              case 'femboy':
                c1 = "#D260A5"
                c2 = "#E4AFCD"
                c3 = "#FEFEFE"
                c4 = "#57CEF8"
                c5 = "#FEFEFE"
                break;
              case 'genderfae':
                c1 = "#97C3A5"
                c2 = "#C3DEAE"
                c3 = "#F9FACD"
                c4 = "#FFFFFF"
                c5 = "#FCA2C4"
                break;
              case 'graysexual':
                c1 = "#740194"
                c2 = "#AEB1AA"
                c3 = "#FFFFFF"
                c4 = "#AEB1AA"
                c5 = "#740194"
                break;
              default:
                  c1 = "#5BCEFA"
                  c2 = "#F5A9B8"
                  c3 = "#FFFFFF"
                  c4 = "#F5A9B8"
                  c5 = "#5BCEFA"
                  break;
              }
              setOutput('<p><span class="c1">                                          ,(((/                                 </span><br /><span class="c2">                                        /(((((                                  </span><br /><span class="c3">                                       ((((#((                              (// </span><br /><span class="c4">                                      (((((((.                           *(((/  </span><br /><span class="c5">                                    /(######/                          *((((/   </span><br /><span class="c1">                                 *//%#####((/                         ((#((/    </span><br /><span class="c2">               ,*/********/////////////////(//*           (%*      ,((##((      </span><br /><span class="c3">      ,*/((///(//////////((/(///////(/////(////*,(*#((/(/((//////###(###(/(     </span><br /><span class="c4">   /(((((((//((///((////((((((/(((((((((((((((((/(((##((#%(##(/((///*(&#(##/    </span><br /><span class="c5">  /#((%(#(((((//#((((((((((((((((((((((((#(((((((((((/##(((((//((//*    ####(/  </span><br /><span class="c1">   (((###(###(#(#####(###############((#((((((((/((//(((#/(/////            ,,  </span><br /><span class="c2">     ,(###%####%&%#############(#(#(####(((((((/(((/////*//,                    </span><br /><span class="c3">         . .....*#(#######(((###(#(##(##(((/(/(/////,                           </span><br /><span class="c4">          .. ....,..........,..*#%#######/(                                     </span><br /><span class="c5">               ..  .............,*%%%%#%((((/                                   </span><br /><span class="c1">                       **,,,****//*(##((###(#(((                                </span><br /><span class="c2">                                        &#(#/#((((((((#                         </span></p>')
              setTimeout(() => {
                let classes = ["c1", "c2", "c3", "c4", "c5"];
                let colors = [c1, c2, c3, c4, c5];
                
                classes.forEach((className, index) => {
                    let elements = document.getElementsByClassName(className);
                    Array.from(elements).forEach(element => {
                        element.style.color = colors[index];
                        element.classList.remove(className);
                    });
                });
              }, 100);
              break;
            case 'ls':
                if (sanitizedInput.split(' ')[1] === '-a') {
                    setOutput('<p>ashley.jpeg<br />anthony.jpg<br />coupleArt.jpg<br />coupleArt2.jpg<br />coupleArt3.png<br />favicon.ico<br />favicon2.ico<br />index.html<br />logo192.png<br />logo512.gif<br />logo512.png<br />manifest.json<br />robots.txt<br />sitemap.xml<br /></p>');
                } else {
                  setOutput('<p>anthony.jpg<br /></p>');
                }
                break;
            case 'open':
              switch (sanitizedInput.split(' ')[1].split('.')[1]) {
                case 'txt':
                  setOutput('<object data="' + sanitizedInput.split(' ')[1] + '" type="text/plain" width="100%" height="100%"></object>')
                  break;
                case 'json':
                  setOutput('<object data="' + sanitizedInput.split(' ')[1] + '" type="application/json" width="100%" height="100%"></object>')
                  break;
                case 'xml':
                  setOutput('<p>open: ' + sanitizedInput.split(' ')[1] + ': Unsuported file format<br />source - https://nygosaki.dev/' + sanitizedInput.split(' ')[1] + '</p>');
                  break;
                case 'jpeg':
                  setOutput('<img src="' + sanitizedInput.split(' ')[1] + '" class="largeImage"/>');
                break;
                case 'jpg':
                  setOutput('<img src="' + sanitizedInput.split(' ')[1] + '" class="largeImage"/>');
                break;
                case 'ico':
                  setOutput('<img src="' + sanitizedInput.split(' ')[1] + '" class="largeImage"/>');
                break;
                case 'png':
                  setOutput('<img src="' + sanitizedInput.split(' ')[1] + '" class="largeImage"/>');
                break;
                case 'gif':
                  setOutput('<img src="' + sanitizedInput.split(' ')[1] + '" class="largeImage"/>');
                break;
                default:
                  setOutput('<p>open: ' + sanitizedInput.split(' ')[1] + ': Unsuported file format or No such file or directory</p>');
                    break;
            }
              break;
        default:
              setOutput('<p>shell: command not found: ' + sanitizedInput + '</p><p>Please try running the `help` command</p>');
      }
      const eventSpawnTerminalLine = new Event('spawnTerminalLine');
      document.dispatchEvent(eventSpawnTerminalLine);
  };

    return (
        <div class="terminal">
            <label for="commandinput" style={{color:'#9b87f5'}}>{user}@Server2 ~</label>
            <input
                type="text"
                aria-label="Command Input"
                autoCapitalize='off'
                autoComplete='off'
                autoCorrect='off'
                value={input}
                onChange={(e) => setInput(e.target.value)}
                autoFocus={true}
                onKeyDown={(e) => {
                  setTimeout(() => {
                    const inputs = document.querySelectorAll('.terminal input');
                    const inputNewestIndex = inputs.length - 1;
                    const inputNewest = inputs.item(inputNewestIndex);
                    if (inputNewest) {
                      inputNewest.setSelectionRange(inputNewest.value.length, inputNewest.value.length);
                    }
                  }, 50);
                    if (e.key === 'Enter') {
                        handleCommand(input);
                        const inputs = document.querySelectorAll('.terminal input');
                        const inputNewestIndex = inputs.length - 1
                        const inputNewest = inputs.item(inputNewestIndex)
                        inputNewest.disabled = true;
                        setCursorVisible(false);
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
          <span>$ </span>
          {input}
          {cursorVisible && <span className='terminal-cursor'>▊</span>}
          <div class='outputClass' dangerouslySetInnerHTML={{__html: output}}></div>
        </div>
    );
  }

export default Terminal;