const CustomButton=({width,height,backgroundColor,text})=>{
    return(
        <button width={width} height={height} style={{backgroundColor:backgroundColor}}>{text}</button>
    )
}
export default CustomButton