import { CirclesWithBar } from "react-loader-spinner"

export const CustomCircleBar=()=>{
    return(<CirclesWithBar
        height="100"
        width="100"
        color="red"
        outerCircleColor="red"
        innerCircleColor="red"
        barColor="red"
        
        ariaLabel="circles-with-bar-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        />)
}