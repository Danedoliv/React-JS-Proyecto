import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from '../Components/NavBar'
import ItemDetailContainer from '../Components/ItemDetailContainer'
import ItemListContainer from '../Components/ItemListContainer'
import CartProvider from "../Context/CartProvider";

export default function ReactRoutes() {
    return (
        <BrowserRouter>
         <CartProvider>
        <NavBar/>
       
        <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path='/category/:id' element={<ItemListContainer/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer/>}/>
        </Routes>   
        </CartProvider>
        </BrowserRouter>
    )
}