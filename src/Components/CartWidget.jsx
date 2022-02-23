import React from 'react';
import { Link } from 'react-router-dom';
import {CartConsumer} from '../Context/CartProvider'

export default function CartWidget() {


  const { cart } = CartConsumer()

  return (
  <Link to="/cart">
       <div className="btn btn-lg text-primary ">
       <i className="fas fa-ticket-alt "></i>   
       <span className="text-light fs-10 "> { cart.length } </span>
        </div>
    </Link>
    );
}
