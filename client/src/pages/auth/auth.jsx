import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from 'react-bootstrap/Row';
import { useLocation } from "react-router-dom";
import "./style.css";

function Auth() {
  const location = useLocation();
  const isLogin = location.pathname === "/registration";

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{height: window.innerHeight - 54}}
    >
      <Card className="p-5" style={{width: 600}}>
        <h2 className="m-auto">{isLogin ? "Registration" : "Authorization"}</h2>
        <Form className="d-flex flex-column p-1">
          <Form.Control
            className="mt-2"
            placeholder="Enter e-mail"
          ></Form.Control>
          <Form.Control
            className="mt-2"
            placeholder="Enter password"
          ></Form.Control>
          <Row className="d-flex justify-content-between mt-4">
            {isLogin
            ?<Button href="/auth" style={{flexBasis: "fit-content"}} variant="warning">Authorization</Button>
            :<Button href="/registration" style={{flexBasis: "fit-content"}} variant="warning">Registration</Button>
            }
            <Button style={{flexBasis: "fit-content"}} variant="success">{isLogin ? "Confirm" : "Log In"}</Button>
          </Row>
        </Form>
      </Card>
    </Container>
  )
}

export default Auth;
