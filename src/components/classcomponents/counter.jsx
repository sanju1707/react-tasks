import { Component } from "react";
import { errorToasts,sucessToasts } from "../npmpackages/toasters/bartost.js";
class Counter extends Component{
    state={
       count:0
    }
    increHandler=()=>{
        this.setState({
            count:this.state.count+1
        },()=>{
            sucessToasts(`the count is ${this.state.count}`,'top-right')
        })
    }
    decreHandler=()=>{
        if(this.state.count>0){
            this.setState({
                count:this.state.count-1
            },()=>{
                errorToasts(`the count is ${this.state.count}`,'top-right')
            })
        }
       
    }
    resetHandler=()=>{
        this.setState({
            count:0
        },()=>{})
    }



   
    render(){
        return(
            <>
             <div style={{border:"2px solid black",width:"100px",height:"100"}}>count {this.state.count}</div>
             <button onClick={this.increHandler}>Increment</button>
             <button onClick={this.decreHandler}>Decrement</button>
             <button onClick={this.resetHandler}>reset</button>
            </>
           
            
        )
    }
}

export default Counter