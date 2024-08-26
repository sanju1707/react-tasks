
import { Component } from 'react'
import './tempdeg.css'




class TempDeg extends Component{
    state={
        cel:0,
        far:0
    }
    changecel=(e)=>{
        console.log(e)
      const val=Number(e.target.value)
        this.setState({
            far:this.changecelsius(val),
            cel:this.val
        },()=>{})
    }
    
    changecelsius=(val)=>{
       return (val*9/5)+32;
    }

    changefar=(e)=>{
        const val=Number(e.target.value)
        this.setState({
            far:this.val,
            cel:this.changefaren(val)
        },()=>{})
    }
    changefaren=(val)=>{
        return (val-32)*5/9
    }
   render(){ 
   return(
    <>
    <input type='text' placeholder='celsisu' onChange={this.changecel} value={this.state.cel}/>
    <input type='text' placeholder='fahrenhit' onChange={this.changefar} value={this.state.far}/>
    </>
   )
}
}
export default TempDeg;