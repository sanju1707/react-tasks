
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeScreen from '../screens/homescreen'
import AboutScreen from '../screens/AboutScreen'
import InvalidScreen from '../screens/invalidscreen'

const NavigateStack=()=>{
    return(
     
     <Routes>
      <Route path="/" element={<HomeScreen/>}/>
      <Route path="/about" element={<AboutScreen/>}/>
      <Route path='/*' element={<InvalidScreen/>}/>
    
     </Routes>
     
    )
}
export default NavigateStack