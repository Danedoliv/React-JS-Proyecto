import { createContext, useContext, useState  } from "react";

const CartContext = createContext();

export const CartConsumer = () => useContext(CartContext)

const CartProvider = ({children}) => {


    const getTot = (cart) => {
        let sum = 0;
        for (let i = 0; i < cart.length; i++) {
          sum = sum + cart[i].cantidad * cart[i].price;
        }
        return sum;
      };


    const verifyCart = (cart, item) => {
        return cart.some((a) => a.id === item.id)
    }

    const unifyCart = (cart, item) => {
        return cart.map((a) => {
            if(a.id === item.id){
                a.cantidad = item.cantidad;
                a.stock = item.stock;
            }
            return a;
        } )
    }

    const [cart, setCart] = useState ([])

    const addCart = (item) => {
      if (verifyCart(cart , item)) {
          setCart(unifyCart(cart , item))
          return;
      }
      setCart([...cart, item])
    }

    const removeCart = (id) => {
        let newCart = cart.filter((e) => e.id !== id)
        setCart(newCart)
    }

    const clearCart = () => {
        setCart([]);
      };

    return (
        <CartContext.Provider
        value={{cart, setCart, addCart, clearCart, removeCart, getTot}}
        >


            {children}
        </CartContext.Provider>
    )
}

export default CartProvider

 
