import { useRef, useState } from "react";
 
const  TechoutFrom= () => {
  const usernameref = useRef();
  const phoneref = useRef();
  const emailref=useRef()
  const [formErrors, setFormErrors] = useState({});

  const onsubmit = (event) => {
    event.preventDefault();
    const userEntered = usernameref.current.value;
    const phoneEntered = phoneref.current.value;
    const emailEntered=emailref.current.value
    const errors = validations(userEntered, phoneEntered,emailEntered);

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    }
    else{
        alert("form successfully submitted")
    }
  };

  const validations = (username, phonenumber,email) => {
    const errors = {};
    if (!username) {
      errors.username = "Please enter a username.";
    } else if (username.length < 4 || username.length > 20) {
      errors.username = "Username must be between 8 and 20 characters.";
    }
    if(!phonenumber){
        errors.phonenumber="please enter a number"
    }
    else if(phonenumber.length!==10){
        errors.phonenumber="please enter 10 valid phone number"
    }
    if(!email){
        errors.email="please enter a email"
    }
    else if(/^[@gmail.com]/.test(email)){
        errors.email="enter a valid email"
    }
    

   
   

    return errors;
  };

  return (
    <>
    <h1 style={{textAlign:'center' }}>Tech out form </h1>
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
          <label htmlFor="pwd">Enter ur Phone:</label>
          <input
            type="number"
            className="form-control"
            id="pwd"
            ref={phoneref}
          />
          <span style={{color:'red'}}>{formErrors?.phonenumber}</span>
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Enter ur email:</label>
          <input
            type="email"
            className="form-control"
            id="pwd"
            ref={emailref}
          />
          <span style={{color:'red'}}>{formErrors?.email}</span>
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default TechoutFrom