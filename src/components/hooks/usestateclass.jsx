import { useState } from "react"

 


 const CounterState=()=>{
    
    const[age,setage]=useState(10)


    const incrementer=()=>{
        setInterval(()=>{
            setage(age=>age+1)
        },1000)
    }
    const decrementer=()=>{
        if(age>0){
            setage(age=>age-1)
        }
    }
    const rester=()=>{
        setage(0)
    }


    return(
      <>
      <h1>the age calculater</h1>
      <h3>the current age  {age}</h3>
      <button onClick={()=>{incrementer()}}>increment</button>
      <button onClick={()=>{decrementer()}}>decrementer</button>
      <button onClick={()=>{rester()}}>rester</button>
      </>
    )
 }
 export default CounterState