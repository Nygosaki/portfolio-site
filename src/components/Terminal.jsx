import React, { useRef, useState, useReducer, useCallback, useEffect } from 'react';
import { useTerminalContext } from '@src/components/TerminalContext';
import { type } from '@testing-library/user-event/dist/cjs/utility/type.js';


function Terminal({ searchParams, path, setPath }) {

    const [input, setInput] = useState('');
    const [output, setOutput] = useState("");
    const [cursorVisible, setCursorVisible] = useState(true);
    const { history, setHistory, historyIndex, setHistoryIndex } = useTerminalContext();
    const pathStat = useRef(path);
    const commands = [
      "help",
      "ls",
      "open",
      "cd",
      "neofetch",
      "blahaj"
  ];
    var paths = [{
      name: '~',
      type: 'dir',
      hidden: false,
      items: [
      {
        name: 'about',
        type: 'dir',
        hidden: false,
        items: [{
          name: 'projects',
          type: 'dir',
          hidden: false,
          items: [{
            name: 'SoT-FishAssistant.md',
            type: 'markdown',
            hidden: false,
            items: '<p><span style="font-style: italic; text-decoration: underline; font-size: larger;">SoT-FishAssistant</span><br />Status: <span style="color: red">Taken Down</span>;<br />Description: A Sea of Thieves external cheat including primarily assisting features, such as ESP of all actors, grouping of objects, emmisery detection, x-marks the spot esp, cannon trajectory prediction, and a lot more.<br />Before being taken down it had over 300 stars on github.<br />Project Files: <a class="githubLink" href="https://github.com/Nygosaki/SoT-FishAssistant">github/Nygosaki/SoT-FishAssistant</a></p>'
          }, {
            name: 'Concert-Notifier.md',
            type: 'markdown',
            hidden: false,
            items: '<p><span style="font-style: italic; text-decoration: underline; font-size: larger;">Concert-Notifier</span><br />Status: <span style="color: green">Active</span>;<br />Description: A python program which scans for concerts of your listened-to artists in your chosen countries.<br />It can pull the artist list from your last.fm library and send a HTML formatted email with the relevant information.<br />Project Files: <a class="githubLink" href="https://github.com/Nygosaki/concert-notifier">github/Nygosaki/concert-notifier</a></p>'
          },{
            name: 'Legit-AimBooster-Aimbot.md',
            type: 'markdown',
            hidden: false,
            items: '<p><span style="font-style: italic; text-decoration: underline; font-size: larger;">Legit-AimBooster-Aimbot</span><br />Status: <span style="color: orange">Archived</span>;<br />Description: A fun side project experimenting with different ways of smoothing mouse movements to find accurate, fast, but human mouse movement smoothing.<br />It was built to get high scores on the now-defunct AimBooster aim trainer website.<br />Project Files: <a class="githubLink" href="https://github.com/Nygosaki/Legit-AimBooster-Aimbot">github/Nygosaki/Legit-AimBooster-Aimbot</a></p>'
          }, {
            name: 'TwitchBottingTools.md',
            type: 'markdown',
            hidden: false,
            items: '<p><span style="font-style: italic; text-decoration: underline; font-size: larger;">TwitchBottingTools</span><br />Status: <span style="color: orange">Archived</span>;<br />Description: A fun side project using Windows Power Automate which bots Twitch streams.<br />It would automatically create accounts if there arent enough, evade IP detection through VPNs, bypass captchas (without captcha solver services), and finally watch the actual stream on many accounts at once. <br />Project Files: <a class="githubLink" href="https://github.com/Nygosaki/TwitchBottingTools">github/Nygosaki/TwitchBottingTools</a></p>'
          }, {
            name: 'Snapchat-AutoSnap.md',
            type: 'markdown',
            hidden: false,
            items: '<p><span style="font-style: italic; text-decoration: underline; font-size: larger;">Snapchat-AutoSnap</span><br />Status: <span style="color: red">Privated Due to Harassment</span>;<br />Description: A Power Automate script for web.snapchat.com to continuously send snaps to friends with the "New Friend" badge.<br />Can be used to spam send snaps to Snapchat bots if you accept their friend requests and farm snap points at the same time. <br />Before being privated, it had over 70 stars.<br />Project Files: <a class="githubLink" href="https://github.com/Nygosaki/Snapchat-AutoSnap">github/Nygosaki/Snapchat-AutoSnap</a></p>'
          }, {
            name: 'Gov-DMARC-Checker.md',
            type: 'markdown',
            hidden: false,
            items: '<p><span style="font-style: italic; text-decoration: underline; font-size: larger;">Gov-DMARC-Checker</span><br />Status: <span style="color: greenyellow">Active Unmaintained</span>;<br />Description: An automated list for gathering all US Government email adresses and finding which ones have vulnerable DMARC records.<br />Implements various techniques such as parallel processing to speed up the process.<br />Fun fact: Most domains have vulnerable records, including but not limited to the justice department, CIA, sherrifs offices, and more! <br />Project Files: <a class="githubLink" href="https://github.com/Nygosaki/Gov-DMARC-Checker">github/Nygosaki/Gov-DMARC-Checker</a></p>'
          }, {
            name: 'SpigotBackdoor.md',
            type: 'markdown',
            hidden: false,
            items: '<p><span style="font-style: italic; text-decoration: underline; font-size: larger;">SpigotBackdoor</span><br />Status: <span style="color: orange">Archived</span>;<br />Description: A custom made Spigot backdoor with auto-updating, silent server command execution, server console logging to webhook, SSH, and more.<br />The legit side is a capture-the-flag type of system.  <br />Project Files: <a class="githubLink" href="https://github.com/Nygosaki/SpigotBackdoor">github/Nygosaki/SpigotBackdoor</a></p>'
          }, {
            name: 'AI-Writing-Detection.md',
            type: 'markdown',
            hidden: false,
            items: '<p><span style="font-style: italic; text-decoration: underline; font-size: larger;">AI-Writing-Detection</span><br />Status: <span style="color: greenyellow">Active Semi-Maintained</span>;<br />Description: This tool will parse the inputted text into many different existing AI writing detection tools and return the results to you. This is to be able to scan text with as many tools as possible without having to do it manually. <br />Project Files: <a class="githubLink" href="https://github.com/Nygosaki/AI-Writing-Detection">github/Nygosaki/AI-Writing-Detection</a></p>'
          }, {
            name: 'portfolio-site.md',
            type: 'markdown',
            hidden: false,
            items: '<p><span style="font-style: italic; text-decoration: underline; font-size: larger;">portfolio-site</span><br />Status: <span style="color: green">Active Maintained</span>;<br />Description: This website! <br />Project Files: <a class="githubLink" href="https://github.com/Nygosaki/portfolio-site">github/Nygosaki/portfolio-site</a></p>'
          }, {
            name: 'simple-backdoor.md',
            type: 'markdown',
            hidden: false,
            items: '<p><span style="font-style: italic; text-decoration: underline; font-size: larger;">simple-backdoor</span><br />Status: <span style="color: greenyellow">Private Active Unmaintained</span>;<br />Description: A C++ Windows backdoor/RAT that is undetected on virus total and avoids end point protection as well as real-time behavioural detection.<br />Project Files: <a class="githubLink" href="https://github.com/Nygosaki/simple-backdoor">github/Nygosaki/simple-backdoor</a></p>'
        }, {
          name: 'machine-learning-unhashing.md',
          type: 'markdown',
          hidden: false,
          items: '<p><span style="font-style: italic; text-decoration: underline; font-size: larger;">machine-learning-unhashing</span><br />Status: <span style="color: green">Private In-Development</span>;<br />Description: A research project for using machine learning to find at which stage of the SHA256 hashing algorithm patterns fully dissapear.<br />Project Files: <a class="githubLink" href="https://github.com/Nygosaki/machine-learning-unhashing">github/Nygosaki/machine-learning-unhashing</a></p>'
      }]
        },{
          name: 'commissions.md',
          type: 'markdown',
          hidden: false,
          items: "<p>My commissions are indefinitely closed except for special circumstances.</p>"
        }]
      },
      {
        name: 'othercoolstuff',
        type: 'dir',
        hidden: false,
        items: [{
          name: 'anthony.jpg',
          type: 'image',
          hidden: false,
          items: '<img src="anthony.jpg" class="largeImage"/>'
        }, {
          name: 'coupleArt.jpg',
          type: 'image',
          hidden: false,
          items: '<img src="coupleArt.jpg" class="largeImage"/>'
        }, {
          name: 'coupleArt2.jpg',
          type: 'image',
          hidden: false,
          items: '<img src="coupleArt2.jpg" class="largeImage"/>'
        }, {
          name: 'coupleArt3.png',
          type: 'image',
          hidden: false,
          items: '<img src="coupleArt3.png" class="largeImage"/>'
        }]
      },
      {
        name: 'importantstuff',
        type: 'dir',
        hidden: false,
        items: [{
          name: 'legal.md',
          type: 'markdown',
          hidden: false,
          items: "<p><a href='/legal'>Legal Homepage</a></p><p><a href='/legal/cookies'>CookiePolicy</a></p><p><a href='/legal/privacy'>PrivacyPolicy</a></p><p><a href='/legal/tos'>TermsOfService</a></p><p><a href='/legal/copyright'>Copyright</a></p>"
        }, 
      {
        name: 'creditsAsh.md',
        type: 'markdown',
        hidden: false,
        items: `            <div class="horizontalAlign">
              <img src="ashley.jpeg" class='credits'/>
              <p>Thanks to:<br /><a href=https://github.com/Ash-does-stuff>Ash-does-stuff</a><br />For helping with some css,<br />teaching me a lot of JS,<br />and coming up with good suggestions :></p>
            </div>`
      }, 
      {
        name: 'creditsOther.md',
        type: 'markdown',
        hidden: false,
        items: '<p>I would also further like to thank the following people:<br />   - Jack Rugile for creating the Canvas Parallax Skyline for sketch.js which I adapted to work with vanilla js canvases.'},
      ]}]
    }]
    
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
  
  const handleTabCompletion = useCallback(
    (event) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      if (input) {
          if (input.includes(' ')) {
            let inputParts = input.split(' ');
            const startPath = path;
            const startPathParts = startPath.split('/');
            let currentPath = paths;
            const newPathParts = inputParts[1].split('/');
            const pathParts = startPathParts.concat(newPathParts);
            const resPath = startPathParts;
            for (let part of pathParts) {
              if (part === '') continue;
              if (part === '~') currentPath = paths;
              const found = currentPath.find(item => item.name === part);
              if (found) {
                resPath.push(found.name);
                currentPath = found.items;
              } else if (part === pathParts[pathParts.length - 1]) {
                const matches = currentPath.filter(item => item.name.startsWith(part));
                if (matches.length === 1) {
                  resPath.push(matches[0].name);
                  console.log(path.split('/')[path.split('/').length - 1]);
                    setInput(inputParts[0] + " " + resPath.slice(resPath.lastIndexOf(path.split('/')[path.split('/').length - 1]) + 1).join('/'));
                }
                }}
            } else {
              const matchingCommand = commands.find(command => command.startsWith(input));
              if (matchingCommand) {
                setInput(matchingCommand);
              }
          
      }
    }
  }},
  [input, setInput, path, paths]
);
useEffect(() => {
  document.addEventListener('keydown', handleTabCompletion);
  return () => document.removeEventListener("keydown", handleTabCompletion);
}, [handleTabCompletion]);

  
    //TODO add file system, fancy logout, move comissions, credits, legal to directory
    const handleCommand = (inputCommand) => {
      setHistory([...history, inputCommand]);
      setHistoryIndex(history.length + 1);
      document.removeEventListener('keydown', handleTabCompletion);
      let sanitizedInput = inputCommand.replace(/[&<>"'`$=\\]/g, function(s) {
        return {
            '&': '',
            '<': '',
            '>': '',
            '"': '',
            "'": '',
            '`': '',
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
                setOutput(`<p class="helpTitle"><b>-General Commands Manual-</b></p><p>    help    - <i>See this list or append before a command to see it's man page (if one is available)</i><br />     ls     - <i>List items present in the current directory</i><br />    open    - <i>Concatenate and print (display) the content of files</i><br />     cd     - <i>Change directory to target folder</i><br />  neofetch  - <i>Print a neofetch of the server</i><br />   blahaj   - <i>Print a blahaj with the appropriate colours. Run 'help blahaj' for syntax info</i><br /></p><br /><p class="helpTitle"><b>-Notice Board-</b><br />To the person DDoSing my site:<br />Why? I have the computing power, its just annoying.<br />Awww is somebody scared of queer femboys and the like? :3c</p>`);
            }
            break;
          case 'neofetch':
            setOutput('<p>       _,met$$$$$gg.</p><p>    ,g$$$$$$$$$$$$$$$P.</p><p>  ,g$$P"     """Y$$.".</p><p> ,$$P\'              `$$$.</p><p>\',$$P       ,ggs.     `$$b:   <span class="neofetchtext">' + user + '</span>@<span class="neofetchtext">Server2</span></p><p>`d$$\'     ,$P"\'   <span class="neofetchtext">.</span>    $$$    --------------------------------</p><p> $$P      d$\'     <span class="neofetchtext">,</span>    $$P    <span class="neofetchtext">OS</span>: Debian GNU/Linux 11 (bullseye) x86_64</p><p> $$:      $$.   <span class="neofetchtext">-</span>    ,d$$\'    <span class="neofetchtext">Host</span>: Google Compute Engine</p><p> $$;      Y$b._   _,d$P\'      <span class="neofetchtext">Kernel</span>: 6.1.42+</p><p> Y$$.    <span class="neofetchtext">`.</span>`"Y$$$$P"\'         <span class="neofetchtext">Uptime</span>: 1+ years</p><p> `$$b      <span class="neofetchtext">"-.__</span>              <span class="neofetchtext">Packages</span>: 733 (dpkg)</p><p>  `Y$$                        <span class="neofetchtext">Shell</span>: bash 5.1.4</p><p>   `Y$$.                      <span class="neofetchtext">Terminal</span>: /dev/pts/1</p><p>     `$$b.                    <span class="neofetchtext">CPU</span>: Intel Xeon (4) @ 2.199GHz</p><p>       `Y$$b.                 <span class="neofetchtext">Memory</span>: ' + (Math.floor(Math.random() * (16002 - 300 + 1)) + 300) + 'MiB / 16002MiB</p><p>          `"Y$b._</p><p>              `"""                                    </p><p>                                                      </p>');
            document.title = "Oh Bread!"
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
              const startPath = path;
              const pathParts = startPath.split('/');
              let currentPath = paths;
              for (let part of pathParts) {
                if (part === '') continue;
                const found = currentPath.find(item => item.name === part && item.type === 'dir');
                if (found) {
                currentPath = found.items;
                }
              }
              let output = "<p>"
              for (let item of currentPath) {
                if (item.hidden) continue;
                output += item.name + '<br />';
              }
              output += "</p>"
              setOutput(output);
                break;
            case 'open':
              const startPathOpen = path;
              const pathPartsOpen = startPathOpen.split('/');
              let currentPathOpen = paths;
              for (let part of pathPartsOpen) {
                if (part === '') continue;
                const found = currentPathOpen.find(item => item.name === part && item.type === 'dir');
                if (found) {
                currentPathOpen = found.items;
                }
              }
              const file = sanitizedInput.split(' ')[1];
              const foundFile = currentPathOpen.find(item => item.name === file && item.type !== 'dir');
              if (foundFile) {
                setOutput(foundFile.items);
              } else {
                setOutput('<p>open: no such file ' + sanitizedInput.split(' ')[1] + '</p>');
              }
              break;
        case 'cd':
          if (sanitizedInput == "cd" || sanitizedInput == "cd ") {
            setOutput('<p>cd: missing argument</p>');
            break;
          } else if (sanitizedInput.split(' ')[1] === '..') {
            setPath(path.split('/').slice(0, -1).join('/'));
          } else if (sanitizedInput.split(' ')[1] === '~') {
            setPath('~')
          } else {
            const startPath = path;
            const startPathParts = startPath.split('/');
            let currentPath = paths;
            const newPathParts = sanitizedInput.split(' ')[1].split('/');
            const pathParts = startPathParts.concat(newPathParts);
            for (let part of pathParts) {
              if (part === '') continue;
              if (part === '~') currentPath = paths;
              const found = currentPath.find(item => item.name === part && item.type === 'dir');
              if (found) {
              currentPath = found.items;
              let newPath = pathParts.slice(pathParts.lastIndexOf('~') + 1).join('/');
              newPath = '~/' + newPath;
              if (newPath.includes('//')) {
                newPath = newPath.replace(/\/{2,}/g, '/');
              }
              setPath(newPath);
              } else {
              setOutput('<p>cd: no such file or directory: ' + sanitizedInput.split(' ')[1] + '</p>');
              setPath(startPath);
              break;
              }
            }
            break;
          }
          
          break;
        default:
              setOutput('<p>shell: command not found: ' + sanitizedInput + '</p><p>Please try running the `help` command</p>');
      }
      setTimeout(() => {
        const eventSpawnTerminalLine = new Event('spawnTerminalLine');
        document.dispatchEvent(eventSpawnTerminalLine);
      }, 50)
  };

    return (
        <div class="terminal">
            <label for="commandinput" style={{color:'#9b87f5'}}>{user}@Server2 {pathStat.current}</label>
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
          <span>$ </span>
          {input}
          {cursorVisible && <span className='terminal-cursor'>▊</span>}
          <div class='outputClass' dangerouslySetInnerHTML={{__html: output}}></div>
        </div>
    );
  }

export default Terminal;