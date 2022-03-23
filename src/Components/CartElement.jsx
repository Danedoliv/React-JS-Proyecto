import React from "react";
import { CartConsumer } from "../Context/CartProvider";

const CartElement = ({item:{img,name,cantidad,price,id}}) => {

    const {removeCart} = CartConsumer()
    return (
      <div className="card mb-3" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-5">
            <img src={img} className="w-100 h-100" alt="..." />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <div className="row my-2 border">
                  <div className="col col-10 text-uppercase">
                      Items
                  </div>
                  <div className="col col-2">{cantidad}</div>
              </div>
              <div className="row my-2 border">
                  <div className="col col-7 text-uppercase">
                      Price
                  </div>
                  <div className="col col-5">USD ${price}</div>
              </div>
              <button onClick={()=>removeCart(id)} className="btn btn-danger text-uppercase mt-2 w-100">
              <i className="fas fa-trash-alt mx-3"></i>
                  Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default CartElement