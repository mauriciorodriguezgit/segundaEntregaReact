import React from 'react'
import { Link } from 'react-router-dom'
import { BsCart4 } from "react-icons/bs";
import  { useContext } from 'react';
import { CartContext } from '../components/CartContext';

const CartWidget = () => {
    const { cantidadEnCarrito } = useContext(CartContext);
    return (

        <>
            <span >
                <BsCart4 size={`2rem`} color={`blue`} />
                <Link to="/carrito"><h3>Carrito</h3><p>{cantidadEnCarrito()}</p></Link>
            </span>





        </>
    )
}

export default CartWidget