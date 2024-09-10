import { useState } from "react";


const ControlForm=()=>{

  const [model,setmodel]=useState("")
  const[modelErr,setmodelErr]=useState("")

  const modelHandler=(event)=>{
    const enteredValue=event.target.value
    console.log(enteredValue)
    setmodel(enteredValue)
    const error=modelValid(enteredValue)
    if(error){
      setmodelErr(error)
    }
    else{
      setmodelErr("")
    }

  }
  const modelValid=(value)=>{
    let error=""
    const modelRegar=/^samsung/ig
    if(!value){
      error="please enter ur model"
    }
    else if(!modelRegar.test(value)){
      error="please enter samsung valid model"
    }
    return error
  }
  const onsubmit=(event)=>{
    event.preventDefault()
    if(modelErr){
      alert("please fill prop")
    }
    else{
      alert("successfully submitted")
    }
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
              {modelErr && <span style={{color:'red'}}>{modelErr}</span>}
              
            </div>
           
           
            <button type="submit" className="btn btn-default">
              Submit
            </button>
          </form>
        </>
      );
}

export default ControlForm