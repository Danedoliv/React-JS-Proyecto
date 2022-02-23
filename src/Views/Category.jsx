import React from "react";
import ItemListContainer from "../Components/ItemListContainer";
import { useParams } from "react-router-dom";

 const Category = () => {
    
    const {category} = useParams()

    return (
        <div>
            
            <ItemListContainer filter={category}/>
               
        </div>
        
       
    )
}

export default Category