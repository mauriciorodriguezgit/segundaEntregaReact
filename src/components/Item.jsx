import React from 'react'

const Item = ({ producto }) => {
    return (
        <>

            <div className="  card mb-3  " style={{ width: '18rem' }} >
                < img src={producto.imagen_url} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{producto.nombre}</h5>
                    {/* <p className="card-text">Descripcion: {producto.descripcion}</p> */}
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Precio$:{producto.precio}</li>
                    <li className="list-group-item">Categoria: {producto.categoria}</li>
                    <a href={`/Item/${producto.id}`} className="btn btn-primary">Detalle</a>
                </ul>

            </div>




        </>
    )
}

export default Item