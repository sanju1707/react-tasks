
import './App.css'
import { PrimaryHead } from './components/headings/head'
import { Image } from './components/images/images'
import { OrderList } from './components/list/list'
import { UnorderList } from './components/list/list'
import { Borders } from './components/borders/borders'
import Header from './components/reactboot1/reactboot1'
import Part from './components/reactboot1/cursoul'
import ReactCard from './components/reactboot1/reactcard'
import { CustomDna } from './components/npmpackages/loaders/loaders'
import { CustomCircleBar } from './components/npmpackages/loaders/circleswithbar'
import CustomBArToast from './components/npmpackages/toasters/bartost.jsx'
import YoutubeClass from './components/classcomponents/youtubeclass'
import Counter from './components/classcomponents/counter'
import TempDeg from './components/tempdeg/tempdeg.jsx'
import ReceipeList from './components/componentdidmount/recepies.jsx'
import FakeStore from './components/componentdidmount/fakestoreapi.jsx'
import RecipeData from './components/componentdidmount/recipesmodal.jsx'
import FakeStoreFilter from './components/componentdidmount/fakestorefilter.jsx'
import CounterState from './components/hooks/usestateclass.jsx'
import CustomTodo from './components/hooks/todosclass.jsx'
import TaskTodo from './components/hooks/todotask.jsx'
import Weather from './components/weathertask/weather.jsx'
import FakeStoreForm from './components/kktasks/fakestoreaddform.jsx'
import CustomButton from './components/button/button.jsx'





function App() {

   const onclick=(childdata)=>{
    console.log(childdata)
   }
  return (
      <>
     <CustomButton  onPress={onclick}/>

     <hr/>
     
      </>
  )
}

export default App
 
