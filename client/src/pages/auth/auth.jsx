import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from 'react-bootstrap/Row';
import { useLocation } from "react-router-dom";
import "./style.css";
import { login, registration } from "../../http/user-api";

function Auth() {
  const location = useLocation();
  const isntLogin = location.pathname === "/registration";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const click = async () => {
    if (isntLogin) {
      const response = await registration(email, password);
      console.log(response);
    } else {
      const response = await login();
    }
  }

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{height: window.innerHeight - 54}}
    >
      <Card className="p-5" style={{width: 600}}>
        <h2 className="m-auto">{isntLogin ? "Registration" : "Authorization"}</h2>
        <Form className="d-flex flex-column p-1">
          <Form.Control
            className="mt-2"
            placeholder="Enter e-mail"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
          <Form.Control
            type="password"
            className="mt-2"
            placeholder="Enter password"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
          <Row className="d-flex justify-content-between mt-4">
            {isntLogin
            ?<Button href="/auth" style={{flexBasis: "fit-content"}} variant="warning">Authorization</Button>
            :<Button href="/registration" style={{flexBasis: "fit-content"}} variant="warning">Registration</Button>
            }
            <Button
              style={{flexBasis: "fit-content"}}
              variant="success"
              onClick={click}
            >
              {isntLogin ? "Register" : "Log In"}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  )
}

export default Auth;
