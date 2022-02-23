import React from "react";
import ItemCount from "./ItemCount";
import "../ProyectImages.css"


 const ItemDetail = ({item}) => {
 
    return (
        <div className="col col-md-6 col-lg-4 my-1"> 
        <div className="card border-secondary ">
           <img src={item.img} className="card-img-top IndexImages" alt="..."/>
           <div className="card-body ">
               <h5 className="card-title text-uppercase">{item.name}</h5>
               <h5 className="card-subtitle text-muted text-uppercase">{item.category}</h5>
               <p className="card-text fs-3">${item.price} </p>
               <div className="my-3">
             
            </div>
               <ItemCount item={item}/>
           
           </div>
           
        </div>
        
    </div>  
    )
   
  }

  export default ItemDetail