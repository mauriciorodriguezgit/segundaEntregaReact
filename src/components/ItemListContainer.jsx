import React, { useEffect, useState } from 'react'

import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs } from "firebase/firestore"
import { datab } from '../config';

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const categoria = useParams().categoria

    useEffect(() => {
        const obtenerProductos = async () => {
            try {
                const productosRef = collection(datab, 'productos');
                const querySnapshot = await getDocs(productosRef);
                const productosData = [];

                querySnapshot.forEach((doc) => {
                    productosData.push({ ...doc.data(), id: doc.id });
                });

                setProductos(productosData);
            } catch (error) {
                console.error('Error al obtener los productos:', error);
            }
        };

        obtenerProductos();
    }, [categoria]);










    // useEffect(() => {
    //     const productosRef = collection(datab, "productos")
    //     getDocs(productosRef)
    //         .then((resp) => {
    //             setproductos(
    //                 resp.doc.maps((doc) => {
    //                     return { ...doc.data(), id: doc.id }
    //                 })
    //             )
    //         })
    // }, [categoria])

    return (<>
        <ItemList productos={productos} />
    </>
    )
}


export default ItemListContainer