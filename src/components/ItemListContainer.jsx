import React, { useEffect, useState } from 'react'
import { pedidoDeDatos } from "./ayuda/pedidoDeDatos"
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

    const [productos, setproductos] = useState([]);
    const categoria = useParams().categoria

    useEffect(() => {
        pedidoDeDatos()
            .then((resp) => {
                if (categoria) {

                    setproductos(resp.filter((prod)=>prod.categoria===categoria))  }  
        else {
    setproductos(resp)}

})}, [categoria])

return (
    <ItemList productos={productos} />
)
}

export default ItemListContainer