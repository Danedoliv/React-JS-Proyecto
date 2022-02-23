import React, { useState } from 'react';
import { CartConsumer } from '../Context/CartProvider';
import { Link } from 'react-router-dom';

const ItemCount = ({item}) => {

   const {cart , addCart } = CartConsumer()
   const [cantidad, setCantidad] = useState(1)
   const {stock} = item
   
   let ticket = item && {
      ...item,
      cantidad,
   }


   const addToCart = () => {
      if (stock < 0 || cantidad <= 0) return;
      addCart(ticket)
   }
   
   const agregarCantidad = () => {
      if (stock -1 > cantidad) {
         setCantidad(cantidad + 1);
      }
   };

   const reducirCantidad = () => {
      if (cantidad > 1) {
         setCantidad(cantidad - 1)
      }
   };
   return (

      <div className="container mx-auto my-1">
         {(cart ,item) ?  (
      <>
      
     
         
         <div className="my-3">
            <p className="fs-5 text-center">Stock: { item.stock - 1 } </p>
         </div>


         <div className="d-flex justify-content-around">
         <button onClick={reducirCantidad} className="btn text-white bg-primary">-</button>


         <h5 className="fs-5">{cantidad}</h5>
         <button onClick={agregarCantidad} className="btn text-white bg-primary">+</button>
         </div>


         <div className="row">
         <button onClick={() => addToCart(item)} className="btn my-2 w-100 bg-primary text-white text-uppercase">Add to Cart</button>
         </div>
         
          </>
         ) : (

            <Link className="btn btn-success w-100 my-3 text-uppercase" to="/cart">
            Go to cart
          </Link>
         )}
      
          
        
  
        <Link to="/" className="btn btn-dark w-100 my-3 text-uppercase">
          Back to Store
        </Link>
        
      </div>
    );
  };
  


export default ItemCount

