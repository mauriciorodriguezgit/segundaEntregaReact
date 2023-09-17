import React, { useState, useEffect } from 'react'
import { pedirItemId } from './ayuda/pedidoDeDatos'
import ItemDetail from './ItemDetail'



const ItemDetailContainer = ({ itemid }) => {

    const [item, setitem] = useState(null)

    useEffect(() => {
        pedirItemId(itemid)
            .then((res)=>{
                setitem(res);
            })

    }, [])


    return (
        <div>
            {item &&<ItemDetail item ={item}/>}
        </div>
    )
}

export default ItemDetailContainer