import { useEffect, useState } from "react"


const Task=()=>{
    

    const[coord,setCoord]=useState({x:0,y:0})

    useEffect(()=>{
        const handler=(event)=>{
            setCoord({x:event.clientX,
                y:event.clientY
            })
        }
        

     window.addEventListener('mousemove',handler)
     window.addEventListener('onClick',circleHandler)
    },[])
    const circleHandler=()=>{
        
        return true
    }
    
    return(
        <>
        <div style={{width:'100px',height:'100px',borderRadius:'16px'
            ,position:'absolute',top:coord.x,left:coord.y,backgroundColor:"red"
        }}>

        </div>
         <h1>{coord.x}  {coord.y}</h1>
        </>
    )
}
export default Task