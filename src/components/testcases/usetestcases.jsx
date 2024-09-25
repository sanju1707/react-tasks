import { useState } from "react"



const UseTestCases=(testCases)=>{
    const[results,setResults]=useState([])
    const runTests=(solution)=>{
        const newResults=testCases.map((testCase)=>{
            const {Input,Output}=testCase
            const Output1=solution(...Input);
            const passed=Output===Output1
            return {Input,Output,Output1,passed};

        })
        setResults(newResults)
    }
    return {results,runTests}

}
export default UseTestCases