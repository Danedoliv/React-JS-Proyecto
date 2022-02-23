import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from '../Components/NavBar'
import ItemListContainer from '../Components/ItemListContainer'
import CartProvider from "../Context/CartProvider";
import Category from "../Views/Category";
import Detail from "../Views/Detail";
import Cart from "../Views/Cart";
import Error from "../Views/Error";

export default function ReactRoutes() {
    return (
        <BrowserRouter>
         <CartProvider>
        <NavBar/>
       
        <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path='/category/:category/' element={<Category/>}/>
        <Route path="/item-detail/:id" element={<Detail/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="*" element={<Error />} />
        </Routes>   
        </CartProvider>
        </BrowserRouter>
        
    )
}

