import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import ItemCount from './ItemCount.jsx';
import "../ProyectImages.css"

export default function Item({item}) {
    return (
     <div className="col col-md-6 col-lg-4 my-1"> 
         <div className="card border-secondary ">
            <img src={item.img} className="card-img-top IndexImages" alt="..."/>
            <div className="card-body ">
                <h5 className="card-title text-uppercase">{item.name}</h5>
                <h5 className="card-subtitle text-muted text-uppercase">{item.category}</h5>
                <p className="card-text fs-3">${item.price} </p>
                <ItemCount stock={item.stock} initial={1} item={item}/>
                <NavLink to="/item/id:" className="btn bg-primary w-100 my-1 text-white text-uppercase">Show detail</NavLink>
            </div>
            
         </div>
         
     </div>  
    )
}