
const CustomButton=(prop)=>{
     const {text='button', onPress=()=>{}, bgcolor="green"}=prop
     
     const myPress=()=>{
        onPress({name:"sanju",salary:"10000"})
     }


    return(
        <button onClick={myPress}>{text}</button>
    )
}
export default CustomButton