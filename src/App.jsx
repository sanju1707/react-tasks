

import { BrowserRouter } from 'react-router-dom'
import './App.css'
import NavbarNavigate from './components/navbar/navbarnavigate'
import NavigateStack from './navigation/navigation-stack'

function App() {

   
  return (
      <>
      
      <BrowserRouter>
      <NavigateStack/>
      </BrowserRouter>
    
      </>
  )
}

export default App
 
