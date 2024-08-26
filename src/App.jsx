
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
import CustomBArToast from './components/npmpackages/toasters/bartost'
import YoutubeClass from './components/classcomponents/youtubeclass'
import CustomButton from './components/button/button'
import Season from './components/seasons/season'
function App() {
  const ImageList=[
    {source:"https://th.bing.com/th/id/R.9bf0470cbea90c844c635f40d84f3721?rik=bP%2fUizTRhIaOxg&riu=http%3a%2f%2f2.bp.blogspot.com%2f-2YcnpB_0rjs%2fUFNEQkoF6SI%2fAAAAAAAAJoM%2ft9l0XjtvR9s%2fs0%2fnaruto-uzumaki-1920x1080-wallpaper.jpg&ehk=07gu0u7Y%2fkEbDk5qfjr%2fphBMAAsshHtPB3OF3pHGQr8%3d&risl=&pid=ImgRaw&r=0",
      width:"300",
      height:"300",

    },
    {
      source:"https://unrealitymag.com/wp-content/uploads/2018/03/Naruto.jpg",
      width:"300",
      height:'300',

    },{
      source:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/06dc6d54-542d-41d2-821a-4f6772ae8a6d/d2qu3kt-f23a4ef1-1911-48f1-bd0a-37f405a56298.jpg/v1/fill/w_576,h_322,q_75,strp/naruto_sharingan_by_lordjem_d2qu3kt-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzIyIiwicGF0aCI6IlwvZlwvMDZkYzZkNTQtNTQyZC00MWQyLTgyMWEtNGY2NzcyYWU4YTZkXC9kMnF1M2t0LWYyM2E0ZWYxLTE5MTEtNDhmMS1iZDBhLTM3ZjQwNWE1NjI5OC5qcGciLCJ3aWR0aCI6Ijw9NTc2In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.CeuZxQwcLh08ppRkWHtTs-kUWK3GTqGByqaGAyA6_Ug",
      width:"300",
      height:"300",
    },
  ]
  return (
    <>
    <div>
    {
      ImageList.map((eachimage)=>{
        return <Image source={eachimage.source} width={eachimage.width} height={eachimage.height}></Image>
      })
    }
    </div>
    <div>
        {[...Array(4)].map((_, i) => (
          <CustomButton
            key={i}
            width="100"
            height="100"
            text="clickme"
            backgroundColor="red"
          />
        ))}
      </div>
      <div>
        <OrderList list={["mango","orange"]}/>
        <OrderList list={["banana","grape"]}/>
        <OrderList list={["pineapple","apple"]}/>

      </div>
      <div>
       <Season/>
      </div>
    </>
  )
}

export default App
