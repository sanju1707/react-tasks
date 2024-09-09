import { useState } from "react";


const ControlForm=()=>{

  const [model,setmodel]=useState("")

  const modelHandler=(event)=>{
    const enteredValue=event.target.value
    console.log(enteredValue)

  }
  const onsubmit=()=>{
    
  }

    
    return (
        <>
          <form onSubmit={onsubmit}>
            <div className="form-group">
                <h1>mobile repair shop</h1>
              <label htmlFor="username">enter device model:</label>
              <input
                type="username"
                className="form-control"
                id="username"
                value={model}
                onChange={modelHandler}
                
              />
              
            </div>
           
           
            <button type="submit" className="btn btn-default">
              Submit
            </button>
          </form>
        </>
      );
}

export default ControlForm