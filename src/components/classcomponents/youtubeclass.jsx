import { Component } from "react";

import "./youtube.css"

class YoutubeClass extends Component{
    state={
        isSub:false,
        text1:"subscribe",
        text2:"subscribed"
    }
    clickHandler=()=>{
        this.setState({
            isSub:!this.state.isSub
        },()=>{})
    }
    render(){
        return(
            <button className={this.state.isSub?"youtube1":"youtube"} onClick={this.clickHandler}>{this.state.isSub?this.state.text2:this.state.text1}</button>
        )
    }
}
export default YoutubeClass;