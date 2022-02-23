import React from 'react'
import Item from './Item'

export default function ItemList({items}) {
    return (
        <div className="row">
            {items && items.map((item) => (
                <Item
                key={item.id}
                item={item}/>
            ))}
            {items.length < 1 && 
            <h1>No hay resultado...</h1>}
        </div>
    )
}