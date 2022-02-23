import React, { useState, useEffect } from 'react'
import ItemList from './ItemList'
import { collection, getDocs} from "firebase/firestore"
import db from "../service"
 
const ItemListContainer = ({filter}) => {

const [data, setData] = useState([])

    useEffect(() => {

        const itemsCollection = collection(db, "items")
        getDocs(itemsCollection).then((snapshot) => {
             if (snapshot.size === 0) {
                console.log("error");
             }
            setData(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data() } )))
        })
    }, []);

const filtered = filter
? data.filter((e) => e.category === filter)
: data;

return (
        <div className="container-fluid" style={{minHeight:"100vh"}}>
            
           
           <ItemList items={data, filtered} />
        </div>
    )
}

export default ItemListContainer