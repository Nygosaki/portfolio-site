import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import classes from "@styling/LoginForm.module.scss";
import "@styling/login.css"
import pfp from '@assets/pfp.png';

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
    if (passwordInputRef.current.value.trim() !== "") {
      setShowButton(true);
    }
  };

  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleUserCardClick = (event) => {
    if (event.target.tagName.toLowerCase() === 'input') {
      return;
    } else if (event.target.tagName.toLowerCase() === 'button') {
      return;
    }
    if (showLoginForm) {
      setShowLoginForm(false);
      const userCard = document.querySelector('.user-card');
      userCard.classList.remove('expanded');
    } else {
      setShowLoginForm(true);
      const userCard = document.querySelector('.user-card');
      userCard.classList.add('expanded');
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

  const submitHandler = (usernameRaw, passwordRaw) => {
    const username = usernameRaw.replace(/[&<>"'`/$=\\]/g, function(s) {
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
    const password = passwordRaw.replace(/[&<>"'`/$=\\]/g, function(s) {
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
    if (username.trim() === "" || password.trim() === "") {
      return;
    } else if (username.toLowerCase() === "nygosaki" && password !== "IAmGay") {
      const userCard = document.querySelector('.user-card');
      userCard.classList.add('shake');
      setTimeout(() => {
        userCard.classList.remove('shake');
      }, 500);
      return;
    }

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
    }, 8000);
    }, []);
  
  useEffect(() => {
    const handleEnterPress = (event) => {
      if (event.key === 'Enter' && showButton) {
        document.querySelector('.submit-button').click();
      }
    };

    document.addEventListener('keydown', handleEnterPress);

    return () => {
      document.removeEventListener('keydown', handleEnterPress);
    };
  }, [showButton]);

  return (
    <div>
      <div className={classes.imageContainer}>
        <div className={classes.pfpAnimation}>
          <div className={classes.pfpColorAnimation}>
            <div className={classes.pfpAnimationContainer}>
              <div className={classes.circle}></div>
              <img src={pfp} style={{ width: "8vw", minWidth: "70px", position: "relative", zIndex: "1" }} alt=''>
              </img>
            </div>
          </div>
        </div>
      </div>
      <div className="login-container">
        <div className="user-card" onClick={handleUserCardClick}>
          <div className="user-card-header">
            <img
              src={pfp}
              alt="User Avatar"
              className="user-avatar"
            />
            <p className="user-name">Nygosaki</p>
          </div>
          {showLoginForm && (
            <div style={{ display: "flex" }}>
              <input
                type="password"
                placeholder="Password"
                ref={passwordInputRef}
                onInput={handlePasswordInput}
                className="user-input"
                id="password"
                style={{ display: showLoginForm ? 'block' : 'none' }}
              />
              {showButton && (
                <button onClick={() => {
                  submitHandler("Nygosaki", passwordInputRef.current.value);
                }} className="submit-button">-&gt;</button>
              )}
            </div>
          )}
        </div>
        <p className="not-listed" onClick={() => submitHandler("guest", "guest")}>Use without logging in</p>
      </div>
      <p className={classes.hintText}>Hint: You don't have to sign up, don't worry :3</p>
      <div className={classes.legal}>
        <p onClick={legalHandler}><a href="#!">Legal</a></p>
      </div>
    </div>
  );
}

export default LoginForm;
