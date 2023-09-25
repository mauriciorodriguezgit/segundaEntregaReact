import React from 'react'
import { useState, } from 'react'
import Button from 'react-bootstrap/Button';

const ItemCount = () => {
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
        const reset = () => {
            setcantidad(0)
        }
    }

const onAdd = () => {
    alert(`agregado al carrito!${cantidad}unidades`)

}
    return (
        <div>

            <Button variant="primary" onClick={incremental}>+</Button>{' '}
            <Button variant="primary" onClick={decreciente}>-</Button>{' '}
            <Button variant="primary" onClick={onAdd}>agregar</Button>{' '}
            <p>{cantidad}</p>


        </div>
    )
}


export default ItemCount