import ItemDetailContainer from "./components/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Productsbycategory from "./components/productsbycategory";
import Contact from "./components/contact";
import { CartProvider } from "./components/CartContext";
import Carrito from "./components/Carrito";









const App = () => {

  const greetings = "Bienvenidos a candystore"
  return (
    <>
      <CartProvider>

        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/productos/:categoria" element={<Productsbycategory />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Carrito" element={<Carrito />}/>

          </Routes>

        </BrowserRouter >
      </CartProvider>
    </>

  );
}

export default App;
