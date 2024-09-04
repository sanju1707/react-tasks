import { Component } from "react";
import { CustomDna } from "../npmpackages/loaders/loaders";
import Table from 'react-bootstrap/Table';
import axios from "axios";
class TableBulb extends Component {
  state = {
    products: [],
    isloading: true,
    count:0
   
  };

  componentDidMount() {
    this.fetchdata();
  }
  fetchdata = async () => {
    const { data, status } = await axios.get(
      "https://fakestoreapi.com/products"
    );
    if (status === 200) {
        const productsWithBulbs = data.map(product => ({ ...product, bulb: false }));
      this.setState(
        {
          products: productsWithBulbs,
          isloading: false,
        },
        () => {
            // console.log(this.state.products)
        }
      );
    }
  };
  bulbHandler=(tarid)=>{
    const updatedProducts = this.state.products.map(product => {
        if (product.id === tarid) {
            const newBulbState = !product.bulb;  
            const updatedCount = this.state.count + (newBulbState ? 1 : -1);  
    
            this.setState({ count: updatedCount });  
    
            return { ...product, bulb: newBulbState };
          }
          return product;
        });
  
      this.setState({ products: updatedProducts });
  }

  render() {
    return (
      <div>
        <h1 style={{textAlign:"center"}}>counter:{this.state.count}</h1>
        {this.state.isloading ? (
          <CustomDna />
        ) : (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>id</th>
                <th>title</th>
                <th>description</th>
                <th>image</th>
                <th>bulb</th>
                <th>price</th>
              </tr>
            </thead>
            <tbody>
              {this.state.products.map((each)=>{
               return(
                <tr>
                <td>{each.id}</td>
                <td>{each.title}</td>
                <td>{each.description}</td>
                <td><img src={each.image} width="100px" height="100px"/></td>
                <td onClick={()=>{this.bulbHandler(each.id)}}><img src={
                    each.bulb?"https://media.geeksforgeeks.org/wp-content/uploads/ONbulb.jpg":"https://media.geeksforgeeks.org/wp-content/uploads/OFFbulb.jpg"
                } width="100px" height="100px"/></td>
                <td>{each.price}</td>
            </tr>
               )
              })}
            </tbody>
          </Table>
        )}
      </div>
    );
  }
}
export default TableBulb
