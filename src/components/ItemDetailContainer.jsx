import React, { useState, useEffect, } from 'react'

import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore"
import { datab } from '../config';



const ItemDetailContainer = () => {

    const [item, setitem] = useState(null);
    const id = useParams().id;


    useEffect(() => {

        const docRef = doc(datab, "productos", id)
        getDoc(docRef)
            .then((resp) => {
                setitem(
                    {...resp.data(), id: resp.id
                })


            })

    }, [id])


    return (
        <div>
            {item && <ItemDetail item={item} />}
        </div>
    )
}

export default ItemDetailContainer