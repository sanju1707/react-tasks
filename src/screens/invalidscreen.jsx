import { useNavigate } from "react-router-dom"


const InvalidScreen=()=>{
    const navigate=useNavigate()
    const clickHandler=()=>{
        navigate("/")
    }
    return(
        <>
        <h1>page not found 404 error</h1>
        <button onClick={clickHandler}>back to home</button>
        </>
    )
}
export default InvalidScreen