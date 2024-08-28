import { Component } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { CustomDna } from "../npmpackages/loaders/loaders";
import Card from "react-bootstrap/Card";

import MyLoader from "../npmpackages/loaders/shimmer";


class FakeStore extends Component {
  state = {
    catey: [],
    products: [],
    loading: true,
    productsLoad: true,
    isButtonClicked:false,
    isButtonClicked2:false,
    bigData:[]
  };

  componentDidMount() {
    this.FetchData();
    this.FetchProducts();
  }

  FetchData = async () => {
    const finalProduct = await axios.get(
      "https://fakestoreapi.com/products/categories"
    );
    // console.log(finalProduct)
    const { data, status } = finalProduct;
    if (status == 200) {
      this.setState(
        {
          catey: data,
          loading: false,
        },
        () => {}
      );
    }
  };
  FetchProducts = async () => {
    const Products = await axios.get("https://fakestoreapi.com/products");
    const { data, status } = Products;
    if (status == 200) {
      this.setState(
        {
          products: data,
          productsLoad: false,
        },
        () => {}
      );
    }
    //console.log(this.state.products)
  };
 buttonClicked=(itemId)=>{
    this.state.products.map(eachProduct=>{
        if(eachProduct.id===itemId){
            this.setState({
                isButtonClicked:!this.state.isButtonClicked,
                isButtonClicked2:true,
                bigData:eachProduct
            },()=>{
                console.log(this.state.bigData)
            })
        }
    })
   
 }

  render() {
    return (
      <>
        {this.state.loading ? (
          <CustomDna />
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              height: "50px",
              justifyContent: "center",
              gap: "10px",
              alignItems: "center",
            }}
          >
            {this.state.catey.map((categerious) => {
              return <Button variant="primary">{categerious}</Button>;
            })}
          </div>
        )}
        <div style={{
            width:'100%',
            display:'flex',
            flexDirection:'row',
            gap:"32px",
            justifyContent:'space-evenly'
        }}>
          <div style={{height:'100vh',border:"2px solid white",overflowY:"auto"}}>
            {this.state.productsLoad ? (
              <CustomDna />
            ) : (
              <>
                {this.state.products.map((each) => {
                  return (
                    <Card style={{ width: "18rem" }} key={each.id}>
                      <Card.Img variant="top" src={each.image} />
                      <Card.Body>
                        <Card.Title>{each.title}</Card.Title>
                        <Card.Text
                          style={{ overflowY: "auto", height: "100px" }}
                        >
                          {each.description}
                        </Card.Text>
                        <Button variant="primary" onClick={()=>{
                            this.buttonClicked(each.id)
                        }}>Display</Button>
                      </Card.Body>
                    </Card>
                  );
                })}
              </>
            )}
          </div>
          <div>
           
          {
           (this.state.isButtonClicked || this.state.isButtonClicked2)?
            <>
            <Card style={{ width: "50rem", height:"38rem",display:"flex",alignItems:"center" }}>
              <Card.Img variant="top" src={this.state.bigData.image} style={{height:"60%",width:"45%",alignSelf:"center"}}/>
              <Card.Body>
                <Card.Title>{this.state.bigData.title}</Card.Title>
                <Card.Text>
                  {this.state.bigData.description}
                </Card.Text>
                <Button variant="primary">{this.state.bigData.price}</Button>
              </Card.Body>
            </Card>
            </>:<MyLoader/>
          }
          </div>
        </div>
      </>
    );
  }
}

export default FakeStore;
