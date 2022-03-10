import React, { useEffect, useState } from 'react';
import ItemDetail from  "./ItemDetail"
import { doc, getDoc} from "firebase/firestore"
import db from "../service"
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {

const [data, setData] = useState([])
const {id} = useParams()


useEffect (() => {
    const document = doc(db,"items", id);

    getDoc(document).then((snapshot) => {
    if(snapshot.exists()) {
        setData({ id: snapshot.id, ...snapshot.data() })
    }
    })

}, []); 


return (
  <div>
      
      {data && <  ItemDetail item={data}/> }
  </div>
  
)

}

export default ItemDetailContainer
