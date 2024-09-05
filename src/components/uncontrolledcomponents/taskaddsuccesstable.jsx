import { useRef, useState } from "react";
import axios from "axios";
import { CustomDna } from "../npmpackages/loaders/loaders";
import Table from 'react-bootstrap/Table';
const AddTable = () => {

  const usernameRef=useRef("")
  const passwordRef=useRef("")
  const [formErrors,setfromErrors]=useState({})
  const[data,setdata]=useState([])

 const onSubmit=(event)=>{
  event.preventDefault()
  const usernameEntered=usernameRef.current.value
  const passwordEntered=passwordRef.current.value
  const formErrors=validations(usernameEntered,passwordEntered)
  if(Object.keys(formErrors).length>0){
    setfromErrors(formErrors)
  }
  else{
    loginApi(usernameEntered,passwordEntered)
  }
 }
 const validations=(username,password)=>{
     const formErrors={}
     if(!username){
        formErrors.username="please enter username"
     }
     else if(username.length<5){
        formErrors.username="please enter minimum 8 characters"
     }

     if(!password){
        formErrors.password="please enter a password"
     }
     else if(password.length<5){
        formErrors.password="please enter minimum 8 charcters"
     }
     return formErrors
 }
 const loginApi= async (username,password)=>{
    
    try{
        // console.log({ username, password }); 
        const response= await axios.post('https://dummyjson.com/auth/login',{
            username: username,
            password: password
        })
        console.log(response)
        
        if(response.status==200){

            setdata([...data,response.data])
            console.log(data,"hii")
        }
        
    }
    catch(err){
        console.log("error message : ",err)
    }

 }
 const deleteHandler=(email)=>{
   const newdata= data.filter((each)=>each.email!=email)
   setdata(newdata)
 }
  return (
    <div>
      <form onSubmit={onSubmit} >
        <div className="form-group">
          <label htmlFor="username">USerName:</label>
          <input type="text" className="form-control" id="username" ref={usernameRef} />
          <span style={{color:"red"}}>{formErrors?.username}</span>
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Password:</label>
          <input type="password" className="form-control" id="pwd" ref={passwordRef} />
          <span style={{color:"red"}}>{formErrors?.password}</span>
        </div>
       
        <button type="submit" className="btn btn-default" style={{backgroundColor:'blue', color:"white"}}>
          Submit
        </button>
      </form>
      <br/>
      <div>
        {
            data.length>0?(
                <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>First Name</th>
          <th>Gender</th>
          <th>email</th>
          <th>Deletion</th>
        </tr>
      </thead>
      <tbody>
       {
        data.map((each,index)=>{
            return(
                <tr>
                    <td>{index+1}</td>
                    <td>{each.firstName}</td>
                    <td>{each.gender}</td>
                    <td>{each.email}</td>
                    <td><button onClick={()=>{deleteHandler(each.email)}} style={{backgroundColor:"blue",color:"white"}}>remove</button></td>
                </tr>
            )
        })
       }
      </tbody>
    </Table>
            ):(<CustomDna/>)
        }
      </div>
    </div>
  );
};
export default AddTable
