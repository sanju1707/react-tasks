import axios from "axios"
import { useEffect, useState } from "react"


const Program1=()=>{
    const[data,setData]=useState([])

    useEffect(()=>{
        fetchData()
        
    },[])
    const fetchData= async ()=>{
       try{
        const response=await axios.get("https://jsonplaceholder.typicode.com/posts")
        
       
        console.log(response.data)
        if(response.status==200){
            setData(response.data)
        }
        else{
            throw new Error("status failed")
            
        }
        
       }
       catch(error){
           console.log(error)
       }
       
    }
    return(
        <div>
      {
        data?.length>0 && (
            
                data.map((each)=>{
                    return(
                        <ul>
                            <li>{each.id}</li>
                            <li>{each.title}</li>
                        </ul>
                    )
                })
               
        )
      }
        </div>
    )
}
export default Program1