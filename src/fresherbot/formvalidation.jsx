import { useRef, useState } from "react";

const FromValidation = () => {
  const usernameref = useRef();
  const passwordref = useRef();
  const [formErrors, setFormErrors] = useState({});

  const onsubmit = (event) => {
    event.preventDefault();
    const userEntered = usernameref.current.value;
    const passEntered = passwordref.current.value;

    const errors = validations(userEntered, passEntered);

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    }
    else{
        alert("form successfully submitted")
    }
  };

  const validations = (username, password) => {
    const errors = {};
    if (!username) {
      errors.username = "Please enter a username.";
    } else if (username.length < 4 || username.length > 20) {
      errors.username = "Username must be between 8 and 20 characters.";
    }

    if (!password) {
      errors.password = "Please enter a password.";
    } else if (password.length < 8 || password.length > 20) {
      errors.password = "Password must be between 8 and 20 characters.";
    } else if (password.includes(username)) {
      errors.password = "Username should not be present in the password.";
    }
    else if (!/\d/.test(password)) {
        errors.password = "Password must contain at least one number.";
      }

   

    return errors;
  };

  return (
    <>
    <h1 style={{textAlign:'center' }}>fresher bot form </h1>
      <form onSubmit={onsubmit}>
        <div className="form-group">
          <label htmlFor="username">Enter your username:</label>
          <input
            type="text"
            className="form-control"
            id="username"
            ref={usernameref}
          />
          <span style={{color:'red'}}>{formErrors?.username}</span>
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Enter ur Password:</label>
          <input
            type="password"
            className="form-control"
            id="pwd"
            ref={passwordref}
          />
          <span style={{color:'red'}}>{formErrors?.password}</span>
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default FromValidation;