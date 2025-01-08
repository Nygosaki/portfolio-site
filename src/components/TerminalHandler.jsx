import React, { useState, useEffect } from 'react';
import '@styling/terminal.css';
import Terminal from '@src/components/Terminal';
import { useLocation } from 'react-router-dom';
// import { useTerminalContext } from './TerminalContext';

import pfp from '@assets/pfp.png';
import icoGithub from '@assets/icoGithub.png';
import icoDiscord from '@assets/icoDiscord.png';
import icoLastfm from '@assets/icoLastfm.png';
import icoTumblr from '@assets/icoTumblr.png';
import icoSteam from '@assets/icoSteam.png';
import icoEmail from '@assets/icoEmail.png';

function TerminalHandler() {
    const [terminals, setTerminals] = useState([]);
    const [lastTrackDetails, setLastTrackDetails] = useState(null);
    const [path, setPath] = useState('~');
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
      setTerminals([...terminals, <Terminal key={terminals.length} searchParams={searchParams} path={path} setPath={setPath} />]);
    };
    document.addEventListener('spawnTerminalLine', addTerminal);

    function useQuery() {
      return new URLSearchParams(useLocation().search);
    }
    const searchParams = useQuery();



  useEffect(() => {
    addTerminal(); // Automatically call addTerminal when the component mounts

    const fetchRecentTracks = async () => {
      try {
        const response = await fetch('https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=MeLikeFish&api_key=f7b7b5601ccea5218a413280eedee7f0&limit=1&format=json');
        const apiResponse = await response.json();
            // Extract the last track
          const lastTrack = apiResponse.recenttracks.track[0];

          // Store the required details
          const lastTrackDetails = {
            name: lastTrack.name,
            artist: lastTrack.artist['#text'],
            largeImageUrl: lastTrack.image.find(img => img.size === "extralarge")['#text'],
            songUrl: lastTrack.url,
            isPlaying: lastTrack['@attr'] ? lastTrack['@attr'].nowplaying === "true" : false
          };
          console.log(lastTrackDetails);
          return (lastTrackDetails)
      } catch (error) {
        console.error('Error fetching recent tracks:', error);
      }
    };

    setLastTrackDetails(fetchRecentTracks());
    fetchRecentTracks().then(trackDetails => {
      if (trackDetails) {
        const trackIcon = document.getElementById('trackIcon');
        if (trackIcon) {
          trackIcon.src = trackDetails.largeImageUrl;
        const trackArtist = document.getElementById('trackArtist');
        if (trackArtist) {
          trackArtist.textContent = trackDetails.artist.length > 35 
            ? trackDetails.artist.substring(0, 30) + '...' 
            : trackDetails.artist;
        }
        const trackName = document.getElementById('trackName');
        if (trackName) {
          trackName.textContent = trackDetails.name.length > 35 
            ? trackDetails.name.substring(0, 30) + '...' 
            : trackDetails.name;
          trackName.href = trackDetails.songUrl
        }
        const trackStatus = document.getElementById('trackStatus');
        if (trackStatus) {
          if (trackDetails.isPlaying) {
            trackStatus.textContent = "Currently Listening To"
          } else {
             trackStatus.textContent = "Last Listened To"
          }
        }
        }
      }
    });

  }, []);

    return (
      <div>
        <div class='terminal'>
        <div class='horizontalAlign'>
        <p>+<br />|<br />|<br />|<br />|<br />|<br />|<br />|<br />|<br />|<br />|<br />|<br />|<br />|<br />|<br />+</p>
        <div class='intro'>
        <p>---------------------------------------------------------------------------</p>
        <div class='horizontalAlign'>
          <img src={pfp} style={{width:"8vw", paddingLeft:"1vw"}} alt=''/>
          <p style={{paddingLeft:"1vw", marginBottom:"1vw"}}><strong>Hey there!</strong><br />
          My name's <strong>Nygosaki</strong> <span class="descriptor">(Any pronouns)</span><br />
          I am a programmer, also interested in<br />
          general IT, cybersecurity and pentesting.<br />
          Currently focusing on bots and other 'malicious' programs.<br />
          Commissions are open btw :3<br />
          </p>
          </div>
          <div style={{flexDirection: "column"}}>
          <div class='horizontalAlign'>
          <div style={{flexDirection: "column"}}>
          <div class='horizontalAlign' style={{marginBottom: "3vw"}}>
          <a href='https://github.com/Nygosaki'>
          <img src={icoGithub} className='iconSocial' alt='Github'/>
          </a>
          <a href='https://discord.gg/sFzqJk9R7E'>
          <img src={icoDiscord} className='iconSocial' alt='Discord'/>
          </a>
          <a href='mailto:nygosaki@nygosaki.dev'>
          <img src={icoEmail} className='iconSocial' alt='Email'/>
          </a>
          <a href='https://www.last.fm/user/MeLikeFish'>
          <img src={icoLastfm} className='iconSocial' alt='Last.fm'/>
          </a>
          <a href='https://www.tumblr.com/blog/melikefish'>
          <img src={icoTumblr} className='iconSocial' alt='Tumblr'/>
          </a>
          <a href='https://steamcommunity.com/profiles/76561198433226986'>
          <img src={icoSteam} className='iconSocial' alt='Steam'/>
          </a>
          </div>
          </div>
          <p style={{marginLeft: "5em", textAlign:"right", fontSize:"smaller"}}><strong><span id='trackStatus' /></strong><br />
          <a id='trackName' href='' /><br /> by <span id='trackArtist' /><br />Streamed From <a href='https://music.apple.com/cz/playlist/milos-main-playlist/pl.u-kv9l2BdCJpKqRo2'>Milo's Playlist (APM)</a></p>
          <img id='trackIcon' src={'https://lastfm.freetls.fastly.net/i/u/300x300/c6f59c1e5e7240a4c0d427abd71f3dbb.jpg'} style={{width:"6", height:"6vw" , marginLeft:"1vw",  borderRadius: '10px'}} alt=''/>
          </div>
          </div>

          <p>---------------------------------------------------------------------------<br /></p>
          <div class='horizontalAlign'>
          <p style={{paddingLeft:'10vw'}}>This is a manually emulated interactive CLI.<br />
          You should run the `help` command to get started :3</p>
          </div>
          <p>---------------------------------------------------------------------------</p>
        </div>
        <p>+<br />|<br />|<br />|<br />|<br />|<br />|<br />|<br />|<br />|<br />|<br />|<br />|<br />|<br />|<br />+</p>


        </div>
        <div class="terminals-container">{terminals}</div>
      </div>
      </div>
    )
};

export default TerminalHandler;