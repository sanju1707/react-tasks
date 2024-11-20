

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import NavbarNavigate from './components/navbar/navbarnavigate'
import NavigateStack from './navigation/navigation-stack'
import TestCase from './components/testcases/testcase'
import TestMock from './components/reactmock/usememo'
import Search from './components/reactmock/searchFunctiuon'
import FromValidation from './fresherbot/formvalidation'
import MyMap from './maps/map'
import RouteMap from './maps/routemap'
import Program2 from './techouts/program1'
import Program1 from './techouts/program1'
import TechoutFrom from './techouts/program2'
import Task from './components/interview/task'
import RegistionForm from './components/ziegalr/register'
import LoginForm from './components/ziegalr/login'

function App() {
  
   
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/register" element={<RegistionForm />} />
      <Route path="/login" element={<LoginForm/>} />
      <Route path="/" element={<div>Welcome! Please <a href="/login">login</a> or <a href="/register">register</a>.</div>} />
    </Routes>
  </BrowserRouter>

  )
}

export default App
 
