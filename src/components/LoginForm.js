import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import classes from "../styling/LoginForm.module.scss";
import usernameIcon from "../assets/akar-icons_person.svg";
import passwordIcon from "../assets/carbon_password.svg";
import "../styling/login.css"

function LoginForm() {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const inputContainerRef = useRef(null);

  const navigate = useNavigate();
  const viewNavigate = (newRoute) => {
    // Navigate to the new route
    if (!document.startViewTransition) {
      return navigate(newRoute);
    } else {
      return document.startViewTransition(() => {
        navigate(newRoute);
      });
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
  
    const username = emailInputRef.current.value.replace(/[&<>"'`/$=\\]/g, function(s) {
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
    const password = passwordInputRef.current.value.replace(/[&<>"'`/$=\\]/g, function(s) {
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

    document.querySelector('.enter').classList.add('enterAnimate');
    console.log("Login attempt: ")
    
    setTimeout(() => {
      viewNavigate('/terminal?user=' + username + '&pass=' + password);
    }, 1000);

    // Construct the URL with the username and password
    // const redirectURL = `/terminal?user=${username}&pass=${password}`;
  
    // Redirect the user to the constructed URL
    // window.location.href = redirectURL;
  };

  const legalHandler = (event) => {
    event.preventDefault();
  
    viewNavigate('/legal');
    // Construct the URL with the username and password
    // const redirectURL = `/terminal?user=${username}&pass=${password}`;
  
    // Redirect the user to the constructed URL
    // window.location.href = redirectURL;
  };
  
  return (
    <div>
    <div class={classes.imageContainer}>
      <img src={require("../assets/pfp.png")} style={{width: "8vw", minWidth: "70px"}} alt=''/>
      <svg class={classes.loader} viewBox="-10 -10 70 70">
        <defs>
          <filter id="glow" x="-100%" y="-100%" width="300%" height="300%">
            <feDropShadow stdDeviation="1" floodColor="#3498db" dx="0" dy="0" floodOpacity="1"/>
            <feDropShadow stdDeviation="1" floodColor="#3498db" dx="0" dy="0" floodOpacity="1"/>
            <feDropShadow stdDeviation="2" floodColor="#3498db" dx="0" dy="0" floodOpacity="1"/>
            <feDropShadow stdDeviation="3" floodColor="#3498db" dx="0" dy="0" floodOpacity="1"/>
            <feDropShadow stdDeviation="5" floodColor="#3498db" dx="0" dy="0" floodOpacity="1"/>
          </filter>
        </defs>
        <circle class={classes.path} cx="25" cy="25" r="20" fill="none" strokeWidth="1"></circle>
      </svg>
    </div>
    <div class={classes.welcomeMain}><p>Welcome to: <span class={classes.welcomeText} /></p></div>
    <form onSubmit={submitHandler} class={classes.form}>
      <div class={classes.inputContainer} ref={inputContainerRef}>
        <div class={classes.centeredContent}>
      <div>
        <img
          class={classes.icon}
          src={usernameIcon}
          alt="Username icon"
          htmlFor="user-name"
        ></img>
        <input
          class={classes.input}
          type="text"
          id="user-name"
          name="user-name"
          autoComplete="on"
          placeholder="Username"
          ref={emailInputRef}
          required={true}
        ></input>
      </div>

      <div>
        <img
          class={classes.icon}
          src={passwordIcon}
          alt="Password icon"
          htmlFor="user-password"
        ></img>
        <input
          class={classes.input}
          type="password"
          id="user-password"
          name="user-password"
          autoComplete="off"
          placeholder="Password"
          ref={passwordInputRef}
          required={true}
        ></input>
      </div>
      </div>

      <button
        class={classes.loginBtn}
        disabled={false}
      >
      <div class="enter">{">"}</div>
      </button>
      </div>

      {/* Add the hint text below the input container */}
      <p class={classes.hintText}>Hint: Just try something :)</p>
    </form>
    <p class={classes.tipClass}>Pro tip: <span class={classes.tipText}></span></p>
    <div class={classes.legal}>
      <p onClick={legalHandler}><a href="#">Legal</a></p>
    </div>
    </div>
  );
}

export default LoginForm;
