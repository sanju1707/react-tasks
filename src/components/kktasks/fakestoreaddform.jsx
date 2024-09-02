import { Component } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import MyLoader from "../npmpackages/loaders/shimmer";
import Table from 'react-bootstrap/Table';

class FakeStoreForm extends Component {
  state = {
    products: [],
    isloading: true,
    dummy:[],
    dummyloading:false
  };
  componentDidMount() {
    this.fetchData();
  }
  fetchData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    const { data, status } = response;
    if (status === 200) {
      this.setState(
        {
          products: data,
          isloading:false,
          dummyloading:true
        },
        () => {}
      );
    } else {
      console.error("err");
    }
  };
  addhandler=()=>{
        if(this.state.dummyloading===true){
          const firstProduct = this.state.products[0]; 
          this.setState({
            
            products:[...this.state.products,firstProduct]
          },()=>{
            alert("successfully added")
          })
        }
  }

  render() {
    return (
      <>
        <h3 style={{ textAlign: "center" }}>Korukonda Sai Sanjay Kumar</h3>
        <div
          style={{
            width: "100%",
            height: "100vh",
            
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <div
            style={{
              width: "200px",
              height: "100vh",
              
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button variant="primary">home</Button>
            <Button variant="primary">About</Button>
            <Button variant="primary">contact</Button>
          </div>
          <div
            style={{
              width: "1000px",
              height: "100vh",
              overflowY: "auto",
              
            }}
          >
            <Button variant="primary" onClick={()=>{this.addhandler()}}>Add To Cart</Button>
            
            {this.state.isloading ? (
              <MyLoader />
            ) : (
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>id</th>
                    <th>title</th>
                    <th>description</th>
                    <th>Image</th>
                  </tr>
                </thead>
                <tbody>{
                    this.state.products.map(each=>{
                        return(
                            <tr>
                                <td>{each.id}</td>
                                <td>{each.title}</td>
                                <td>{each.description}</td>
                                <td><img src={each.image} width="100" height="100"/></td>
                            </tr>
                        )
                    })
                    
                    }</tbody>
              </Table>
            )}
          </div>
        </div>
      </>
    );
  }
}
export default FakeStoreForm;
