
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeScreen from '../screens/homescreen'
import AboutScreen from '../screens/AboutScreen'
import InvalidScreen from '../screens/invalidscreen'
import Categery from './nestednavcat'
import Electronics from '../screens/electrnics'
import Jewellery from '../screens/jewellery'
import { createContext, useState } from 'react'

 export const UserDetails=createContext()

const NavigateStack=()=>{
    const[username,setUsername]=useState("sanju")
    const[isDark,setIsDark]=useState(true)
    const DarkHandler=()=>{
        setIsDark(!isDark)
    }
    return(
     
   <UserDetails.Provider value={{
    username:username,
    isDark:isDark,
    DarkHandler
   }}>
      <Routes>
      <Route path="/" element={<HomeScreen/>}/>
      <Route path="/about" element={<AboutScreen/>}/>
      <Route path='/*' element={<InvalidScreen/>}/>
      <Route path='/categery' element={<Categery/>}>
         <Route path='electronics' element={<Electronics/>}/>
         <Route path='jewellery' element={<Jewellery/>}/>
      </Route>
    
     </Routes>
   </UserDetails.Provider>
     
    )
}
export default NavigateStack