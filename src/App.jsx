
import './App.css'
import { PrimaryHead } from './components/headings/head'
import { Image } from './components/images/images'
import { OrderList } from './components/list/list'
import { UnorderList } from './components/list/list'
import { Borders } from './components/borders/borders'
import Header from './components/reactboot1/reactboot1'
import Part from './components/reactboot1/cursoul'
import ReactCard from './components/reactboot1/reactcard'


function App() {
  return (
      <>
      <Header></Header>
      
      <Part></Part>
      <div className='divcard'>
      <ReactCard></ReactCard>
      <ReactCard></ReactCard>
      <ReactCard></ReactCard>
      <ReactCard></ReactCard>
      </div>
      </>
  )
}

export default App
