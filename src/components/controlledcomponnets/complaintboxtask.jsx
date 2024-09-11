import { useState } from "react";
import axios from "axios";
import { CustomDna } from "../npmpackages/loaders/loaders";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const SamsungComplaintBox = () => {
    const[tableData,settableData]=useState([])
    const[model,setmodel]=useState("")
    const[err,seterr]=useState("")
    const[number,setnumber]=useState("")
    const[err2,seterr2]=useState("")
    const[complaint,setcomplaint]=useState("")
    const modelHandler=(event)=>{
        const enterModel=event.target.value
        setmodel(enterModel)
        console.log(enterModel)
        const error=modelValidation(enterModel)
        if(error){
            seterr(error)
        }
        else{
            seterr("")
        }
    }
    const modelValidation=(value)=>{
      let error=""
      let modelRegar=/^samsung/ig
      if(!value){
        error="please enter ur model"
      }
      else if(!modelRegar.test(value)){
        error="please valid model of samsung"
      }
      return error
    }
    const numberHandler=(event)=>{
        const enterNumber=event.target.value
        setnumber(enterNumber)
        const error=numberValidate(enterNumber)
        if(error){
            seterr2(error)
        }
        else{
            seterr2("")
        }
    }
    const numberValidate=(value)=>{
        let error=""
        const numberReger=/^[6-9][0-9]{9}/
        if(!value){
            error="please enter ur number"
        }
        else if(!numberReger.test(value)){
            error="enter valid number"
        }
        return error
    }
    const complaintHandler=(event)=>{
        const enteredcomplaint=event.target.value
        setcomplaint(enteredcomplaint)
    }
    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:3000/data");
            settableData(response.data); 
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const onsubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post("http://localhost:3000/data", {
                modelname: model,
                number: number,
                complaint: complaint
            });
           
            fetchData();
        } catch (error) {
            console.error("Error submitting data:", error);
        }
    };
  return (
    <div>
      <form onSubmit={onsubmit}>
        <div className="form-group">
          <label htmlFor="samsung">enter ur device model:</label>
          <input type="text" className="form-control" id="samsung" 
          value={model}
          onChange={modelHandler}
          
          />
          { err && <span style={{color:"red"}}>{err}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="number">enter ur number:</label>
          <input type="number" className="form-control" id="number"
          value={number}
          onChange={numberHandler}
          />
          {err2 && <span style={{color:"red"}}>{err2}</span> }
        </div>
        <div className="form-group">
          <label htmlFor="complaintbox">enter ur complaint:</label>
          <input type="text" className="form-control" id="complaintbox" 
          value={complaint}
          onChange={complaintHandler}
          />
        </div>
       
        <button type="submit" className="btn btn-default">
          Submit
        </button>
      </form>
      <br/>
      <div>
      <h1 style={{textAlign:'center'}}>complaints are listed here</h1>
      {tableData.length > 0 ? (
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Model</th>
                                <th>Number</th>
                                <th>Complaint</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.modelname}</td>
                                    <td>{item.number}</td>
                                    <td>{item.complaint}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                ) : (
                    <p>No complaints found</p>
                )}
      </div>
    </div>
  );
};
export default SamsungComplaintBox
