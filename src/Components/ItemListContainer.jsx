import React, { useState, useEffect } from 'react'
import ItemList from './ItemList'


const ItemListContainer = () => {

const array = [
    {id:1,name:"Tomorrowland",stock:45,price:140,img:"https://wallpaperaccess.com/full/1544902.jpg",category:"Festival"},
    {id:2,name:"EDC Las Vegas",stock:30,price:120,img:"https://tomorrowlandlatino.com/wp-content/uploads/2020/06/EDC-Las-Vegas.jpg",category:"Ticket"},
    {id:3,name:"Qdance",stock:20,price:115,img:"https://www.q-dance.com/static/images/defqonskin/overview/overview-card-tickets.jpg?w=1024 ",category:"Ticket"},
    {id:4,name:"UMF",stock:12,price:175,img:"https://ultrabuenosaires.com/wp-content/uploads/2015/11/buenos-aires-og-1.jpg ",category:"Ticket"},
    {id:5,name:"Lollapalooza",stock:300,price:160,img:"https://www.latercera.com/resizer/ydI51w5nF5373xI-6gDXHj7nhSQ=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/ORPU3HGNZFB63D7CM2A4TVGH64.jpg",category:"Ticket"},
    {id:6,name:"Sensation White",stock:2040,price:230,img:"https://i0.wp.com/box2029.temp.domains/~chilectr/wp-content/uploads/2019/09/QubeC-1.jpg?fit=1024%2C576",category:"Private Party"},
    {id:7,name:"TomorrowWorld",stock:62,price:175,img:"https://i.ytimg.com/vi/_iXaTm_gNYs/maxresdefault.jpg",category:"Ticket"},
    {id:8,name:"Private Pool Party",stock:140,price:115,img:"https://nosotros.ellitoral.com/wp-content/uploads/party.jpg",category:"Private Party"},
    {id:9,name:"BuyGore Event Show",stock:135,price:245,img:"https://i.ytimg.com/vi/fqqNM4iyQDs/maxresdefault.jpg",category:"Private Party"}
]

const [data, setData] = useState(null)




let promise = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve(array)
    }, 1000)

})

const resolveArray = async () => {
    try {
        const data = await promise;
        setData(data)
        console.log(data);
    } catch (error) {
        console.log(error);
    }
    finally{
        console.log("Termina");
    }
}

useEffect(()=> {
resolveArray()
}, [])

return (
        <div className="container-fluid" style={{minHeight:"100vh"}}>
            
           
           <ItemList items={data}/>
        </div>
    )
}



export default ItemListContainer