import React from 'react'

const ItemDetail = ({item}) => {
    return (
        <>
        <div className="  card mb-3  " style={{ width: '18rem' }} >
            < img src={item.imagen_url} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{item.nombre}</h5>
                <p className="card-text">Descripcion: {item.descripcion}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Precio$:{item.precio}</li>
                <li className="list-group-item">Categoria: {item.categoria}</li>
                
            </ul>

        </div>
        </>

    )
}

export default ItemDetail