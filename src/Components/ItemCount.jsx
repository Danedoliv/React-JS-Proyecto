import React, { useState } from 'react';
import { CartConsumer } from '../Context/CartProvider';

const ItemCount = ({stock, initial, item}) => {

   const {addCart} = CartConsumer()

   const [cantidad, setCantidad] = useState(initial)

   const agregarCantidad = () => setCantidad(cantidad + 1)

      
   

   const reducirCantidad = () => setCantidad(cantidad - 1)
   

  

       return (
         <div className="container mx-auto my-1">
            <div className="my-3">
               <p className="fs-5 text-center">Stock : {stock}</p>
            </div>
            <div className="d-flex justify-content-around">
               <button onClick={reducirCantidad} className="btn text-white bg-primary">-</button>
               <h5 className="fs-5">{cantidad}</h5>
               <button onClick={agregarCantidad} className="btn text-white bg-primary">+</button>
            </div>
            <div className="row">
            <button onClick={() => addCart(item)} className="btn my-2 w-100 bg-primary text-white text-uppercase">Add to Cart</button>
            </div>
         </div>
      )
   }
  

export default ItemCount