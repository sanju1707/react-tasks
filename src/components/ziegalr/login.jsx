import { useRef, useState } from "react";


const LoginForm = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [formErrors, setFormErrors] = useState("");
  const [loginStatus, setLoginStatus] = useState(null);
  

  const onsubmit = (event) => {
    event.preventDefault();

    const emailEntered = emailRef.current.value;
    const passwordEntered = passwordRef.current.value;

    
    const usersData = JSON.parse(localStorage.getItem("usersData")) ;


    if (!emailEntered || !passwordEntered) {
      setFormErrors("Please enter both email and password.");
      return;
    }

    
    const user = usersData.find(
      (user) => user.email === emailEntered && user.password === passwordEntered
    );

    if (user) {
      setLoginStatus("Login successful!");
      alert("Login successful!");
      
    } else {
      setLoginStatus("Invalid email or password.");
      setFormErrors("Invalid email or password.");
    }
  };

  return (
    <>
    <h1 style={{textAlign:"center"}}>Login Form</h1>
      <form onSubmit={onsubmit}>
        <div className="form-group">
          <label htmlFor="useremail">Email address:</label>
          <input
            type="email"
            className="form-control"
            id="useremail"
            ref={emailRef}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Password:</label>
          <input
            type="password"
            className="form-control"
            id="pwd"
            ref={passwordRef}
          />
        </div>
        <button type="submit" style={{ backgroundColor: "green", color: "white" }}>
          Login
        </button>
        {formErrors && <div style={{ color: "red", marginTop: "10px" }}>{formErrors}</div>}
        {loginStatus && <div style={{ marginTop: "10px" }}>{loginStatus}</div>}
      </form>
    </>
  );
};

export default LoginForm;

