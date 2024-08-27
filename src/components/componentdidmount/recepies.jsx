
import { Component } from "react"
import { CustomDna } from "../npmpackages/loaders/loaders"


class ReceipeList extends Component{
     
    state={
        Receipes:[],
        loading:true,
        error:false
    }

     componentDidMount(){
        console.log("fetching data here")
         this.fetchData()
     }

     fetchData= async ()=>{
        const data= await fetch('https://dummyjson.com/recipes')
        const response=await data.json()
        const {recipes}=response
         

        this.setState({
            Receipes:recipes,
            loading:false
        },()=>{})
     }


    render(){
        return(
            <>
            <h1>Receipes Lists</h1>

            {
                this.state.loading?<CustomDna/>:<>
                 <h1>welcome to our restro</h1>
                 {
                    this.state.Receipes.map((eachdata,index)=>{
                        return (
                           <div key={index}>
                            <h3>{eachdata.name}</h3>
                            
                           </div>
                        )
                    })
                 }

                </>
            }
            </>
        )
    }
}


export default ReceipeList;

