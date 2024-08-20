
import './App.css'
import { PrimaryHead } from './components/headings/head'
import { Image } from './components/images/images'
import { OrderList } from './components/list/list'
import { UnorderList } from './components/list/list'

function App() {
  return (
      <>
      <PrimaryHead></PrimaryHead>
      <Image></Image>
      <OrderList></OrderList>
      <UnorderList></UnorderList>
      </>
  )
}

export default App
