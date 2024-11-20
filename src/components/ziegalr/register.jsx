import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const usernameRef = useRef("");
  const passwordRef = useRef("");
  const useremailRef = useRef("");
  const userphoneRef = useRef("");
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();

  const onsubmit = async (event) => {
    event.preventDefault();
    const userEntered = usernameRef.current.value;
    const passEntered = passwordRef.current.value;
    const emailEntered = useremailRef.current.value;
    const phoneEntered = userphoneRef.current.value;
    const formErrors = validations(userEntered, passEntered, emailEntered, phoneEntered);

    if (Object.keys(formErrors).length > 0) {
      setFormErrors(formErrors);
    } else {
      const newUser = {
        username: userEntered,
        password: passEntered,
        email: emailEntered,
        phone: phoneEntered,
      };

      
      const usersData = JSON.parse(localStorage.getItem("usersData")) || [];
      usersData.push(newUser);
      localStorage.setItem("usersData", JSON.stringify(usersData));

      alert("Registration successful!");
      navigate("/login");  
    }
  };

  const validations = (username, password, email, number) => {
    const formErrors = {};
    if (!username) {
      formErrors.username = "Please enter a username";
    } else if (username.length < 8 || username.length > 20) {
      formErrors.username = "Please enter between 8 and 20 characters";
    }

    if (!password) {
      formErrors.password = "Please enter a password";
    } else if (password.length < 8 || password.length > 20) {
      formErrors.password = "Password must be between 8 and 20 characters";
    }

    if (!email) {
      formErrors.email = "Please enter an email";
    }

    if (!number) {
      formErrors.number = "Please enter a mobile number";
    }

    return formErrors;
  };

  return (
    <div>
        <h1 style={{textAlign:"center"}}>Registration Form</h1>
      <form onSubmit={onsubmit}>
        <div className="form-group">
          <label htmlFor="username">Enter your name:</label>
          <input
            type="text"
            className="form-control"
            id="username"
            ref={usernameRef}
          />
          <span style={{ color: "red" }}>{formErrors?.username}</span>
        </div>
        <div className="form-group">
          <label htmlFor="phonenumber">Enter your phone number:</label>
          <input
            type="number"
            className="form-control"
            id="phonenumber"
            ref={userphoneRef}
          />
          <span style={{ color: "red" }}>{formErrors?.number}</span>
        </div>
        <div className="form-group">
          <label htmlFor="useremail">Email address:</label>
          <input
            type="email"
            className="form-control"
            id="useremail"
            ref={useremailRef}
          />
          <span style={{ color: "red" }}>{formErrors?.email}</span>
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Password:</label>
          <input
            type="password"
            className="form-control"
            id="pwd"
            ref={passwordRef}
          />
          <span style={{ color: "red" }}>{formErrors?.password}</span>
        </div>
        <button type="submit" style={{ backgroundColor: "blue", color: "white" }}>
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;

