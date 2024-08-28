export const Image=(props) =>{
    const{source,width,height}=props
    return(
        <>
        <img src={source} width={width} height={height}/>
        </>
    )
}