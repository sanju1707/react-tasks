//import { Listitems } from './components/list/list'

export const Listitems =(prop)=>{
    const{list}=prop
    return (
        <>
        {
            list.map((listing)=>{
                return <li>{listing}</li>
            })
        }
        </>
    )
}


export const OrderList=(prop)=>{
    const{list}=prop
    return(
        <>
        <ol>
            <Listitems list={list}></Listitems>
            
        </ol>
        </>
    )
}

export const UnorderList=(prop)=>{
    const{list}=prop
    return(
        <>
        <ul>
            <Listitems list={list}></Listitems>
        </ul>
        </>
    )
}