import React, { useState, useEffect,} from 'react'
import { pedirItemId } from './ayuda/pedidoDeDatos'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';



const ItemDetailContainer = () => {

    const [item, setitem] = useState(null);
    const id = useParams().id;
    

    useEffect(() => {
        pedirItemId(Number(id))
            .then((res)=>{
                setitem(res);
            })

    }, [id])


    return (
        <div>
            {item &&<ItemDetail item ={item}/>}
        </div>
    )
}

export default ItemDetailContainer