import { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

class AddCart extends Component {

  state={
    employeedata:[{name:"sanjay",salary:"100000",role:"react-developer"},{name:"prasanth",salary:"200000",role:"angular-developer"}]
  }
   
  clickHandler=()=>{
    const newData={name:"tarun",salary:"300000",role:"fontend-developer"}
    const updateData=[...this.state.employeedata,newData]
    this.setState({
        employeedata:updateData
    },()=>{})
  }
  removeHandler=(tarin)=>{
    const filterData=this.state.employeedata.filter((each,index)=>index!=tarin)
    this.setState({
        employeedata:filterData
    },()=>{})
  }


  render() {
    return (
     <>
     
     <Button variant="primary" onClick={()=>this.clickHandler()}>Add to cart</Button>
     
     <div style={{
        width:"100%",
        height:"100vh",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-evenly"
      }}>
        {
            this.state.employeedata.length>0?(
                this.state.employeedata.map((each,index)=>{
                    return(
                        <Card style={{ width: "18rem" ,height:"22rem"}}>
            <Card.Img variant="top" src="https://wallpapercave.com/wp/ioOdSIJ.jpg" width="200px" />
            <Card.Body>
              <Card.Title>{each.name}</Card.Title>
              <Card.Text>
               {each.salary}
              </Card.Text>
              <Card.Text>
               {each.role}
              </Card.Text>
              <Button variant="primary" onClick={()=>{this.removeHandler(index)}}>remove</Button>
            </Card.Body>
          </Card>
                    )
                })
            ):<h3>no data</h3>
        }
      </div>
     
     </>
    );
  }
}

export default AddCart
