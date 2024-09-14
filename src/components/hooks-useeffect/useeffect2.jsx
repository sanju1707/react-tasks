import { useEffect, useRef, useState } from "react"



const UseEffect2=()=>{
   
    const[salary,setSalary]=useState(10000)
    const salaryRef=useRef(0)
   useEffect(()=>{
    console.log('useeffect triggering')
    salaryRef.current=salary
   },[salary])
    const clickHandler=()=>{
        setSalary(salary+1000)
        console.log("clicked")
    }
    return(
        <div>
            <h1>{salary}</h1>
            <button onClick={clickHandler}>increment salary</button>
            <h1>previous salary : {salaryRef.current}</h1>
        </div>
    )
}
export default UseEffect2