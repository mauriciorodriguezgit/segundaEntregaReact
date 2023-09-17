import ItemDetailContainer from "./components/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"



const App = () => {

const greetings ="Bienvenidos a candystore"
  return (
    <>
      <NavBar />
      <ItemListContainer/>
      <ItemDetailContainer itemid={2}/>
    </>
  )
}

export default App
