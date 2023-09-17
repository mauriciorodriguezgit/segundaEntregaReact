import React, { useEffect, useState } from 'react'
import { pedidoDeDatos } from "./ayuda/pedidoDeDatos"
import ItemList from './ItemList';

const ItemListContainer = () => {

    const [productos,setproductos]=useState([]);

    useEffect(() => {
        pedidoDeDatos()
        .then((resp)=>{
            setproductos(resp);
        })
    }, [])

    return (
        <ItemList productos ={productos}/>
    )
}

export default ItemListContainer