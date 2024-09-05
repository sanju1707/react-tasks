import { useRef } from "react";
import axios from "axios";
import { useState } from "react";

const Uncontrolled = () => {
  const usernameRef = useRef("");
  const passwordRef = useRef("");
  const [formErrors,setfromErrors]=useState({})
  const onsubmit = (event) => {
    event.preventDefault();
    const userEntered = usernameRef.current.value;
    const passEntered = passwordRef.current.value;
    const formErrors = validations(userEntered, passEntered);

    if (Object.keys(formErrors).length > 0) {
      setfromErrors(formErrors)
    } else {
        loginApi(userEntered,passEntered)
    }

    // console.log(userEntered)
  };
  const validations = (username, password) => {
    const formErrors = {};
    if (!username) {
      formErrors.username = "please enter username";
    } else if (username.length < 1 || username.length > 20) {
      formErrors.username = "please enter min 8 and max 20 charcters";
    }

    if (!password) {
      formErrors.password = "please enter password";
    } else if (password.length < 8 || password.length > 20) {
      formErrors.password =
        "please enter min 8 and max 20 charcters in password";
    }

    return formErrors;
  };
  const loginApi = async (username, password) => {
    try {
      
      const response = await axios.post("https://dummyjson.com/auth/login", {
        username: username,
        password: password
      });
      console.log(response);
    } catch (err) {
      console.error("Error message", err); 
    }
  };
  return (
    <>
      <form onSubmit={onsubmit}>
        <div className="form-group">
          <label htmlFor="username">Email address:</label>
          <input
            type="username"
            className="form-control"
            id="username"
            ref={usernameRef}
          />
          <span>{formErrors?.username}</span>
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Password:</label>
          <input
            type="password"
            className="form-control"
            id="pwd"
            ref={passwordRef}
          />
          <span>{formErrors?.password}</span>
        </div>
        <div className="checkbox">
          <label>
            <input type="checkbox" /> Remember me
          </label>
        </div>
        <button type="submit" className="btn btn-default">
          Submit
        </button>
      </form>
    </>
  );
};
export default Uncontrolled;
