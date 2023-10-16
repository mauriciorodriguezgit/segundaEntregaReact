// import React, { useEffect, useState } from 'react'

// import ItemList from './ItemList';
// import { useParams } from 'react-router-dom';
// import { collection, getDocs } from "firebase/firestore"
// import { datab } from '../config';

// const ItemListContainer = () => {

//     const [productos, setProductos] = useState([]);
//     const categoria = useParams().categoria

//     useEffect(() => {
//         const obtenerProductos = async () => {
//             try {
//                 const productosRef = collection(datab, 'productos');
//                 const querySnapshot = await getDocs(productosRef);
//                 const productosData = [];

//                 querySnapshot.forEach((doc) => {
//                     productosData.push({ ...doc.data(), id: doc.id });
//                 });

//                 setProductos(productosData);
//             } catch (error) {
//                 console.error('Error al obtener los productos:', error);
//             }
//         };

//         obtenerProductos();
//     }, [categoria]);    

//     return (<>
//         <ItemList productos={productos} />
//     </>
//     )
// }


// export default ItemListContainer
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { datab} from "../config";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
   
    const categoria = useParams().categoria;
    const titulo="productos"

    useEffect(() => {
        const productosRef = collection(datab, "productos");
        const q = categoria ? query(productosRef, where("categoria", "==", categoria)) : productosRef;

        getDocs(q)
            .then((resp) => {
                setProductos(
                    resp.docs.map((doc) => {
                        return { ...doc.data(), id: doc.id }
                    })
                )
            })
    }, [categoria])

    return (
        <div>
            <ItemList productos={productos} titulo={titulo} />
        </div>
    )
}

export default ItemListContainer