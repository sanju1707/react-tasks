import { useContext } from "react"
import { Outlet ,Link} from "react-router-dom"
import { UserDetails } from "./navigation-stack"
import UseReducerExample from "../components/hooks/usereducer/usereducer"


const Categery=()=>{
   const {username,isDark,DarkHandler}= useContext(UserDetails)
   const changetheme=()=>{
    DarkHandler()
   }

    return(
        <>
       <h1 style={{ backgroundColor: isDark ? 'pink' : 'yellow' }}>{username}</h1>
        <button onClick={changetheme}>changetheme</button>
        <h1>categery</h1>
        <Link to={"electronics"}>Electronics</Link>
        <Link to={"jewellery"}>Jewellery</Link>
        

        <Outlet/>
        <UseReducerExample/>
        </>
    )
}
export default Categery