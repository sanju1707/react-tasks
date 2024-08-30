import { useState } from "react"
import taskCreateTodoList from "./todotask"





const TaskTodo=()=>{
    
    const[todo,settodo]=useState(taskCreateTodoList())
     const[data,setdata]=useState('null')
    
   const  clickhander=(index)=>{
        let dummy='null'
        if(index%2==0){
            dummy= 'even'
        }
        else{
            dummy= 'odd'
        }
        setdata(dummy)
    }

    return (
        <>
          <h1 style={{ textAlign: 'center' }}>Todo Even Odd Task</h1>

        <h3>{`button is ${data}`}</h3>

          <ol
            style={{
              width: '100%',
            
              display: 'grid',
              gridTemplateRows: 'repeat(10, 1fr)',
              gridTemplateColumns: 'repeat(10, 1fr)',
              gap: '10px', 
              padding: '10px', 
            
             
            }}
          >
            {todo.map((each, index) => {
              return (
                <li
                  key={index}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    border: '1px solid gray',
                    padding: '5px',
                  }}
                >
                  <span>{each.item}</span>
                  <button onClick={()=>{clickhander(index+1)}}>Check</button>
                </li>
              );
            })}
          </ol>
        </>
      );
      
}
export default TaskTodo;