import { Outlet ,Link} from "react-router-dom"


const Categery=()=>{
    return(
        <>
        <h1>categery</h1>
        <Link to={"electronics"}>Electronics</Link>
        <Link to={"jewellery"}>Jewellery</Link>
        <Outlet/>
        </>
    )
}
export default Categery