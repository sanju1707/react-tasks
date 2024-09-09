import { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';
import { CustomDna } from "../npmpackages/loaders/loaders";
import Table from 'react-bootstrap/Table';
const Task3 = () => {
  const [model, setmodel] = useState(false);
  const [data,setdata]=useState([])
  const userNameRef=useRef("")
  const passwordRef=useRef("")
  const addHandler = () => {
    setmodel(true);
  };
  const closeHandler=()=>{
    setmodel(false)
  }
  const onsubmit=(event)=>{
    event.preventDefault()
    const userEntered=userNameRef.current.value
    const passwordEntered=passwordRef.current.value
    const newData=[userEntered,passwordEntered]
    setdata([...data,newData])
    
  }
  const deleteHandler=(tarindex)=>{
    const newdata=data.filter((each,index)=>index!=tarindex)
    setdata(newdata)
  }
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>korukonda sai sanjay kumar</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{
            width: "100px",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            // border: "2px solid black",
            justifyContent: "center",
            alignItems: "center",
            rowGap: "10px",
          }}
        >
          <Button variant="primary">home</Button>
          <Button variant="primary">About</Button>
          <Button variant="primary">contact us</Button>
        </div>
        <div
          style={{
            width: "1000px",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            // border: "2px solid black",
          }}
        >
          <Button
            variant="primary"
            style={{ width: "150px" }}
            onClick={ addHandler }
          >
            add items
          </Button>
          {
            data.length>0?(
                <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>password</th>
          
          <th>Deletion</th>
        </tr>
      </thead>
      <tbody>
       {
        data.map((each,index)=>{
            return(
                <tr>
                    <td>{index+1}</td>
                    <td>{data[index][0]}</td>
                    <td>{data[index][1]}</td>
                    
                    <td><button onClick={()=>{deleteHandler(index)}} style={{backgroundColor:"blue",color:"white"}}>remove</button></td>
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
      <Modal show={model}>
        <Modal.Header>
          <Modal.Title>enter the form details</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form onSubmit={onsubmit}>
            <div className="form-group">
              <label htmlFor="username">Email address:</label>
              <input
                type="username"
                className="form-control"
                id="username"
                ref={userNameRef}
                
              />
            
            </div>
            <div className="form-group">
              <label htmlFor="pwd">Password:</label>
              <input
                type="password"
                className="form-control"
                id="pwd"
                ref={passwordRef}
              />
             
            </div>
            
            <button type="submit" className="btn btn-default">
              Submit
            </button>
          </form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={closeHandler}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default Task3;
