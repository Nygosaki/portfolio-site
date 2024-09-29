import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import classes from "../styling/LoginForm.module.scss";
import "../styling/login.css"

function LoginForm() {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [showPassword, setShowPassword] = useState(false);
  const handleUserNameInput = () => {
    if (emailInputRef.current.value.trim() !== "") {
      setShowPassword(true);
    }
  };

  const [showButton, setShowButton] = useState(false);
  const handlePasswordInput = () => {
    if (emailInputRef.current.value.trim() !== "") {
      setShowButton(true);
    }
  };

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

    console.log("Login attempt: ")
    viewNavigate('/terminal?user=' + username + '&pass=' + password);
    
    // setTimeout(() => {
    //   viewNavigate('/terminal?user=' + username + '&pass=' + password);
    // }, 1000);

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

  // useEffect(() => {
  //   emailInputRef.current.focus();
  // }, []);
  useEffect(() => {
      setTimeout(() => {
      emailInputRef.current.focus();
    }, 7000);
    }, []);
  
  return (
        <div>
          <div className={classes.imageContainer}>
            <div className={classes.pfpAnimation}>
              <div className={classes.pfpColorAnimation}>
                <div className={classes.pfpAnimationContainer}>
                <div className={classes.circle}></div>
                  <img src={require("../assets/pfp.png")} style={{width: "8vw", minWidth: "70px", position: "relative", zIndex: "1"}} alt=''>
                  </img>
                </div>
              </div>
            </div>
          </div>
    <form onSubmit={submitHandler} class={classes.form}>
    <div class={classes.flexContainer}>
      <div>
    <div className={`${classes.centeredContent} ${showPassword ? classes.faded : classes.blinkingText}`} id="user">
      <p class={classes.loginTxt}>{'>'}</p>
        <input
              type="text"
              id="user-name"
              name="user-name"
              autoComplete="off"
              placeholder="__"
              ref={emailInputRef}
              required={true}
              onInput={handleUserNameInput}
              ></input>
        </div>
      <div className={`${showPassword ? classes.slideBottom : classes.hidden}`} id="pass">
        <div className={`${classes.centeredContent} ${showButton ? classes.faded : classes.blinkingText}`}>
        <p class={classes.loginTxt}>{'>'} </p>
        <input
              type="password"
              id="user-password"
              name="user-password"
              autoComplete="off"
              placeholder="__"
              ref={passwordInputRef}
              required={true}
              onInput={handlePasswordInput}
              ></input>
        </div>
      </div>
      </div>
        <button
        className={`${classes.loginBtn} ${showButton ? classes.slideRight : classes.hidden}`}
        disabled={false}
      >
      <div className={`${showButton ? classes.blinkingText : ""}`}>{"->"}</div>
      </button></div>
    </form>
    <p class={classes.hintText}>Hint: You can use guest credentials :3</p>
    <div class={classes.legal}>
      <p onClick={legalHandler}><a href="#!">Legal</a></p>
    </div>
    </div>
  );
}

export default LoginForm;
