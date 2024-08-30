import { Component } from "react";

import axios from "axios";
import { CustomDna } from "../npmpackages/loaders/loaders";
class Weather extends Component{
  state={
    data1:{},
    isloading:true
  }

 

 componentDidMount(){
    this.getlocation();
 }



    getlocation(){
        if(navigator?.geolocation){
            navigator?.geolocation?.getCurrentPosition((position)=>{
                const {latitude,longitude}=position.coords;
                if(latitude&&longitude){
                    this.fetchData(latitude,longitude);
                }
            })
        }
        else{
            console.error('error')
        }
    }
    fetchData=async (lat,long)=>{
        const response= await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=873229bfa3142e94e0ba325058db1d86`)
        const{data,status}=response
        if(status===200){
         this.setState({
            data1:data,
            isloading:false
         },()=>{
            console.log(this.state.data1)
         })
        }
    }
    

     changehandler=(kelvin)=>{
        if (!kelvin) return null
        const cel=(kelvin-273.15).toFixed(2)
        if(cel<10){
            return 'url("https://th.bing.com/th/id/OIP.5BUEP1r03AI3VebKQB6i_gHaEK?rs=1&pid=ImgDetMain")'
        }
        else if(cel>10 && cel<25){
                 return 'url("https://th.bing.com/th/id/OIP.nX5pnQxG3pc9ZHizFdW2SgHaEK?rs=1&pid=ImgDetMain")'
        }
        else if(cel>25){
            return 'url("https://media.istockphoto.com/photos/bright-sun-shining-in-blue-sky-with-starburst-effect-picture-id492849878?k=6&m=492849878&s=612x612&w=0&h=uX-XmA7BEMXoUfmsKaTwAvgxoRoVAKBg_g2ENd0YxKU=")'
        }

    }



    render(){
        const { data1} = this.state;
    const { coord, main, name } = data1;
        return(
            <div style={{
                width:'100%',
                height:"100vh",
                display:'flex',
                    flexDirection:"column",
                    justifyContent:'center',
                    alignItems:'center',
                    backgroundColor:"black",
                    backgroundImage:main ? this.changehandler(main.temp_max) : "",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
            }}>
            {
                this.state.isloading?<CustomDna/>:
                <div
                style={{
                    width:'300px',
                    height:'300px',
                    display:'flex',
                    flexDirection:"column",
                    justifyContent:'center',
                    alignItems:'center',
                    backgroundColor:'white'
                }}
                
                >
                 <h4>{name}</h4>
                <span>Latitude:{coord.lat}</span>
                <span>Longitude:{coord.long}</span>
                <span>Max_temp:{main.temp_max}</span>
                <span>min_temp:{main.temp_min}</span>
                <span>Sealevel:{main.sea_level}</span>
                <span>pressure:{main.pressure}</span>
                <span>humidity:{main.humidity}</span>


                </div>
            }
            
            </div>
        )
    }
}
export default Weather