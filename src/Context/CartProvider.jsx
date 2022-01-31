import { createContext, useContext, useState  } from "react";



const CartContext = createContext();
export const CartConsumer = () => useContext(CartContext)

const CartProvider = ({children}) => {
    const [cart, setCart] = useState ([])

    let owner = true;

    function addCart(item) {
        setCart([...cart, item])
    }

    function checkItems() {
        console.log("items checked");
    }


    return (
        <CartContext.Provider
        value={{cart, owner, setCart, addCart, checkItems}}
        >


            {children}
        </CartContext.Provider>
    )
}

export default CartProvider