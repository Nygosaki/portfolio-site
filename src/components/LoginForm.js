import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import classes from "../styling/LoginForm.module.scss";
import usernameIcon from "../assets/akar-icons_person.svg";
import passwordIcon from "../assets/carbon_password.svg";
import "../styling/login.css"

function LoginForm() {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

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
  
    const username = emailInputRef.current.value;
    const password = passwordInputRef.current.value;
  
    viewNavigate('/terminal?user=' + username + '&pass=' + password);
    // Construct the URL with the username and password
    // const redirectURL = `/terminal?user=${username}&pass=${password}`;
  
    // Redirect the user to the constructed URL
    // window.location.href = redirectURL;
  };
  

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes.inputContainer}>
      <div>
        <img
          className={classes.icon}
          src={usernameIcon}
          alt="Username icon"
          htmlFor="user-name"
        ></img>
        <input
          className={classes.input}
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
          className={classes.icon}
          src={passwordIcon}
          alt="Password icon"
          htmlFor="user-password"
        ></img>
        <input
          className={classes.input}
          type="password"
          id="user-password"
          name="user-password"
          autoComplete="off"
          placeholder="Password"
          ref={passwordInputRef}
          required={true}
        ></input>
      </div>

      <button
        className={classes.loginBtn}
        disabled={false}
      >
      {">"}
      </button>
      </div>

      {/* Add the hint text below the input container */}
      <p className={classes.hintText}>Hint: Just try something :)</p>
    </form>
  );
}

export default LoginForm;
