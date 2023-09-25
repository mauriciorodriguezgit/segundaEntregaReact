import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';


const Contact = () => {
  const [nombre,setName]=useState("")
  const[email,setEmail]=useState("")
  // const [purchaseId,setPurchaseId]=useState ("")


  // si cambio purchaseId por algo ,este cambia de "vacio a tenes algo"
  const purchaseId =""

  const handleSubmit=(e)=>{
  e.preventDefault()
  nombre ===""|| email===""?alert("existe campos vacios" ):alert (`registrado con el nombre ${nombre}con correo electronico ${email}`)
  }


  return (
    <div>
      <h1>contacto</h1>
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      {purchaseId === "" ?<p>No has enviado informacion</p>:
      <p>Tu compra se realizó con el ID : {purchaseId}</p>}




    </div>
  )
}

export default Contact