import { useEffect, useState } from "react"
import axios from "axios"



const UseEffect1 =()=>{
    const[data1,setData]=useState([])
    const[type,setType]=useState('products')
    const[age,setAge]=useState(0)
    useEffect(()=>{
        document.title=`use effect ${age}`
        console.log("useeffect rendering")
        fetchData();
       
    },[type,age])
 

    const fetchData=async()=>{
       
        try{
            const {data,status}= await axios.get(`https://fakestoreapi.com/${type}`)
            if(status===200){
                setData(data)
                
            }
        }
        catch(err){
            console.error("error mesaage",err)
        }
    }
    const clickHandler=(each)=>{
        setType(each)
    }
    const ageHandler=()=>{
        setAge(age+1)
    }
    return(
        <div>
         <h1>useeffect examples</h1>
         <button onClick={ageHandler}>increment age</button>
         {
            ['products','users','carts'].map(each=><button onClick={()=>{clickHandler(each)}}>{each}</button>)
            
         }
         <h1>{type}</h1>
         {
            data1.map(each=><pre>{JSON.stringify(each)}</pre>)
         }
        </div>
    )
}
export default UseEffect1