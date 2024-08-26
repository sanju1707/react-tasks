
import { Image } from "../images/images"

const Season=()=>{
    const date=new Date().getMonth()
    function season1(){
        if(date>1 && date<=3){
            return <Image src="https://th.bing.com/th/id/OIP.4T-8vQVMsXZiX1I1c50EtAHaE4?rs=1&pid=ImgDetMain" width="500" height="500"/>
        }
        else if(date>3 && date<=6){
            return<Image source="https://th.bing.com/th/id/OIP.m-FZ_fH-FpZ_s2KZS_pO5wHaFI?rs=1&pid=ImgDetMain" width="500" height="500"/>
        }
        else if(date>6 && date<=9){
            return <Image source="https://th.bing.com/th/id/OIP.nX5pnQxG3pc9ZHizFdW2SgHaEK?rs=1&pid=ImgDetMain" width="500" height="500"/>
        }
    }
    return(
        <>
        
           {season1()}
        
        </>
        
    
    )
}
export default Season