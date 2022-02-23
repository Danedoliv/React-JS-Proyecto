import React from "react";
import { Link } from "react-router-dom";
import { CartConsumer } from "../Context/CartProvider";
import CartElement from "./CartElement";
import FormClass from "./FormClass";


const CartBody = () => {
  const  {cart, clearCart, removeCart, getTot} = CartConsumer();


  return (
    <div className="container-fluid">
      <div className={` ${cart.length > 0 && " d-flex justify-content-between aling-items-center"} px-4`}>
        <h1 className="text-center text-uppercase text-primary my-5">checkout</h1>
       {cart.length > 0 && <i onClick={clearCart} className="fas fa-trash-alt pointer btn my-5 fs-3 text-danger text-center"></i>}
      </div>

      {cart.length > 0 && (
        <div className="container border m-lg-5 ">
          <div className="row">
            <div className="container  col col-12 col-md-6 my-4 py-2 container-scroll">
            {cart.map((item,index) => (
                <CartElement key={index} item={item} remove={removeCart} />
              ))}
              
            </div>
            <div className="col col-12 col-md-6 py-2 my-4">
            <FormClass total={getTot(cart)} purchase={cart} />
            </div>
          </div>
        </div>
      )}
      {cart.length < 1 && (
        <div className="container full-height d-flex align-items-center justify-content-center ">
          <div className="w-50">
            <h3 className="text-center text-primary text-uppercase">
              Empty Cart
            </h3>

            <div className="my-5 d-flex">
              <Link to="/" className="btn btn-primary w-100 text-uppercase">
                Back to Shop
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartBody;