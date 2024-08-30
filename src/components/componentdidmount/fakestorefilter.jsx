import { Component } from "react";
import axios from "axios";
import { CustomDna } from "../npmpackages/loaders/loaders";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class FakeStoreFilter extends Component {
  state = {
    catey: [],
    loading1: true,
    cateyproducts: [],
    loading2: true,
    
  };

  componentDidMount() {
    this.FetchCatey();
    this.FetchProducts()
  }
  FetchProducts = async () => {
    const Products = await axios.get("https://fakestoreapi.com/products");
    const { data, status } = Products;
    if (status == 200) {
      this.setState(
        {
         cateyproducts:data
          
        },
        () => {}
      );
    }
    //console.log(this.state.products)
  };

  FetchCatey = async () => {
    const { data, status } = await axios.get(
      "https://fakestoreapi.com/products/categories"
    );
    if (status === 200) {
      this.setState(
        {
          catey: [...data,"all"],
          loading1: false,
        },
        () => {}
      );
    }
  };

  cateyHandler = (each) => {
    if(each==='all'){
        this.FetchProducts()
    }
    else{
    this.FetchCateyProducts(each);
    }
  };
  FetchCateyProducts = async (selected) => {
    const { data, status } = await axios.get(
      `https://fakestoreapi.com/products/category/${selected}`
    );
    if (status === 200) {
      this.setState(
        {
          cateyproducts: data,
          loading2: false,
        },
        () => {}
      );
    }
  };

  render() {
    return (
      <>
        {this.state.loading1 ? (
          <CustomDna />
        ) : (
          <div
            style={{
              width: "100%",
              height: "50px",
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              alignItems: "center",
            }}
          >
            {this.state.catey.map((each) => {
              return (
                <button
                  onClick={() => {
                    this.cateyHandler(each);
                  }}
                  style={{
                    backgroundColor: "blue",
                    color: "white",
                    borderStyle: "none",
                    borderRadius: "5px",
                  }}
                >
                  {each}
                </button>
              );
            })}
          </div>
        )}
        <div>
          {this.state.loading2 ? (
            <CustomDna />
          ) : (
            <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:"space-evenly"}}>
              {this.state.cateyproducts.map((each) => {
                return (
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={each.image} />
                    <Card.Body>
                      <Card.Title>{each.title}</Card.Title>
                      <Card.Text style={{height:"100px",overflowY:"auto"}}>
                        {each.description}
                      </Card.Text>
                      <Button variant="primary">{each.price}</Button>
                    </Card.Body>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </>
    );
  }
}

export default FakeStoreFilter;
