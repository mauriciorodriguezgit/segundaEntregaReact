import React from 'react'
import ItemCount from './ItemCount';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';



const ItemDetail = ({ item }) => {
    return (
        <>
            <Card className="mb-3 m-3" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.imagen_url} />
                <Card.Body>
                    <Card.Title>{item.nombre}</Card.Title>
                    <Card.Text>
                        Descripcion: {item.descripcion}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Precio$:{item.precio}</ListGroup.Item>
                    <ListGroup.Item>Categoria: {item.categoria}</ListGroup.Item>
                    <ListGroup.Item>
                        <ItemCount />

                    </ListGroup.Item>


                </ListGroup>


            </Card>
        </>

    )
}

export default ItemDetail