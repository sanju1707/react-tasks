import { useReducer, useState } from "react"

const reducer=(state,action)=>{
    switch(action.type){
        case "INCREMENT_AGE":
            return{...state,age:state.age+1}
        case "CHANGE_NAME":
            return{...state,name:action.payload}    
        default:
            return state    
    }

}
function UseReducerExample(){
    const initialState={
        name:"sanju",
        age:22,
        todos:["he is maheshbabu fan" ,"lover of indu"],
        homeAddress:{

        }
      
    }
    const[currentState,dispatch]= useReducer(reducer,initialState)
    const incrementAgeHandler=()=>{
        dispatch({
            type:"INCREMENT_AGE",
            payload:1
        })
    }
    const[name,setName]=useState("")
    const nameHandler=(event)=>{
        setName(event.target.value)
    }
    const onSubmit=()=>{
        dispatch({
            type:"CHANGE_NAME",
            payload:name
        })
    }
    return(
       <div>USe reducer example
        <input type='text' value={name} onChange={nameHandler}/>
        <button onClick={onSubmit}>submit</button>
        <h1>{currentState.name}</h1>
        <h1>{currentState.age}</h1>
        <button onClick={incrementAgeHandler}>increment age</button>
       </div>
    )
}
export default UseReducerExample