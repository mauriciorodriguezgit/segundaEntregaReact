
import React, { useEffect, useState } from 'react';
import { pedidoDeDatos } from './ayuda/pedidoDeDatos';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const Productsbycategory = () => {
    const [productos, setProductos] = useState([]);
    const { categoria } = useParams();

    useEffect(() => {
        pedidoDeDatos().then((resp) => {
            if (categoria) {
                setProductos(resp.filter((prod) => prod.categoria === categoria));
            } else {
                setProductos(resp);
            }
        });
    }, [categoria]);

    return <ItemList productos={productos} />;
};

export default Productsbycategory;
