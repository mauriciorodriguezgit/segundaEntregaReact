import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import { Link } from 'react-router-dom';

const Item = ({ producto }) => {
    return (
        <>

        
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={producto.imagen_url} />
                <Card.Body>
                    <Card.Title>{producto.nombre}</Card.Title>
                    {/* <Card.Text>
                        Descripcion: {producto.descripcion}
                    </Card.Text> */}
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Precio$:{producto.precio}</ListGroup.Item>
                    <ListGroup.Item>Categoria: {producto.categoria}</ListGroup.Item>

                </ListGroup>
                <Card.Body>
                    
                    <Link to={`/item/${producto.id}`}className="btn btn-primary">detalle</Link>

                </Card.Body>
            </Card>


        </>
    )
}

export default Item