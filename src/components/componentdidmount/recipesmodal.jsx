import { Component } from "react";
import axios from "axios";
import { CustomDna } from "../npmpackages/loaders/loaders";
import { Listitems, OrderList } from "../list/list";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

class RecipeData extends Component {
  state = {
    data: [],
    loading: true,
    error: false,
    dummy:[],
    modalShow:false
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/recipes");
      const { data, status } = response;

      if (status === 200) {
        this.setState(
          {
            data: data.recipes,
            loading: false,
          },
          () => {}
        );
      }
    } catch (err) {
      console.error(err);
    }
  };
  clickHandler=(eachData)=>{
     this.setState({
        dummy:eachData,
        modalShow:true
     },()=>{})
  }
  closeHandler=()=>{
    this.setState({
        modalShow:false
    })
  }

  render() {
    return (
      <>
        <h1 style={{ textAlign: "center" }}>Recipes are listing here</h1>
        <div>
          {this.state.loading ? (
            <CustomDna />
          ) : (
            <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:"space-evenly",rowGap:"20px"}}>
              {this.state.data.map((eachData) => {
                return (
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={eachData.image} />
                    <Card.Body>
                      <Card.Title>{eachData.name}</Card.Title>
                      <Card.Text>
                       Servings: {eachData.servings}
                      </Card.Text>
                      <Card.Text>
                       Ratings: {eachData.rating}
                      </Card.Text>
                      <Card.Text>
                       MealType: {eachData.mealType}
                      </Card.Text>
                      <Button variant="primary" onClick={()=>{this.clickHandler(eachData)}} >more info</Button>
                    </Card.Body>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
        <Modal show={this.state.modalShow}>
        <Modal.Header>
          <Modal.Title>{this.state.dummy.name}</Modal.Title>
          <Card.Img variant="top" src={this.state.dummy.image} style={{width:'50%',height:"30%"}}/>
        </Modal.Header>

        <Modal.Body>
            
          <h3>Instructions</h3>
          <OrderList list={this.state.dummy.instructions}/>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={this.closeHandler}>Close</Button>
         
        </Modal.Footer>
      </Modal>
      </>
    );
  }
}
export default RecipeData;
