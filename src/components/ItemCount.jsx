
import { useState, } from 'react'
import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { CartContext } from './CartContext';


const ItemCount = ({ producto }) => {
    const { agregarAlCarrito } = useContext(CartContext);
    const [ocultar, setOcultar] = useState(false); // Define la variable ocultar




    const [cantidad, setcantidad] = useState(0)


    const incremental = () => {
        if (cantidad < 10) {
            setcantidad(cantidad + 1)
        }
    }
    const decreciente = () => {
        if (cantidad > 0) {
            setcantidad(cantidad - 1)
        }
    }

    const onAdd = () => {
        if (cantidad > 0) {
            agregarAlCarrito(producto, cantidad);
            setcantidad(0);
            setOcultar(true);
        }
    };
    return (
        <div>{!ocultar && (<>



            <Button variant="primary" onClick={incremental}>+</Button>{' '}
            <p>{cantidad}</p>
            <Button variant="primary" onClick={decreciente}>-</Button>{' '}
            <Button variant="primary" onClick={onAdd}>agregar</Button>{' '}


        </>
        )}
        </div>
    )
}


export default ItemCount