//import { Listitems } from './components/list/list'

export const Listitems =()=>{
    return (
        <>
        <li>naruto</li>
        <li>sasuke</li>
        <li>sakura</li>
        </>
    )
}


export const OrderList=()=>{
    return(
        <>
        <ol>
            <Listitems></Listitems>
            
        </ol>
        </>
    )
}

export const UnorderList=()=>{
    return(
        <>
        <ul>
            <Listitems></Listitems>
        </ul>
        </>
    )
}