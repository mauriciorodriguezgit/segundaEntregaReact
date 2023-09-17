import React from 'react'
import Item from './Item';

const ItemList = ({ productos }) => {

    return (
        <div >
            <h2>Productos</h2>

            <div className="row row-cols-1 row-cols-md-2 g-4">
                
                    {productos.map((prod) => <Item producto={prod} key={prod.id} />)}
                
            </div>
        </div>



    )
}

export default ItemList