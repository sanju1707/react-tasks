import { useState } from "react"
import createTodoList from "./todoshelper1"





const CustomTodo=()=>{
    const[todo,settodo]=useState(createTodoList())

    const additems=()=>{
        const len=todo.length+1
        const text=`item ${len}`
        const myobject={
            id:len,
            item:text
        }
        settodo([...todo,myobject])
    }
    const deletehandler=(tarid)=>{
         const newtodo=todo.filter(each=>{
            if(each.id!=tarid){
                return each
            }
         })
         settodo(newtodo)
    }
    const updatehandler=(tarid)=>{
       const newtodo= todo.map(each=>{
            if(each.id===tarid){
               return {...each,item:`update the data ${each.id}`}
            }
            else{
                return each
            }
        })
        
        settodo(newtodo)
    }

    return(
        <>
        <button onClick={()=>{additems()}}>add items</button>
        <ol>
            {
                todo.map(each=>{
                    return(
                        <>
                        <li>{each.item}</li>
                        
                        <button onClick={()=>{deletehandler(each.id)}}>delete</button>
                        <button onClick={()=>{updatehandler(each.id)}}>update</button>
                        </>
                    )
                })
            }
        </ol>
        
        </>
    )

   
}
export default CustomTodo;