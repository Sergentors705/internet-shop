import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import "./style.css";

function DevicePage() {
  const device = {id: 1, name: "Iphone 14 Pro", price: 1500, rating: 10, img: "1fbb8ab0-ab37-485c-a13d-159549c5d1c4.jpg"};
  const descriptions = [
    {id: 1, title: "RAM", description: "6 GB"},
    {id: 1, title: "Camera", description: "48mp"},
    {id: 1, title: "CPU", description: "A12"},
    {id: 1, title: "Cores", description: "8"},
    {id: 1, title: "Battery", description: "4000"},
  ]
  return (
    <div>
      <Container className="mt-5">
        <Row>
          <Col md={4}>
            <Image
              src={`/img/${device.img}`}
              height="300px"
              width="300px"
              style={{objectFit: "cover"}}
            />
          </Col>
          <Col md={4}>
            <Row>
              <h2>{device.name}</h2>
              <div>Rating: {device.rating}</div>
            </Row>
          </Col>
          <Col md={4}>
            <Card className="d-flex flex-column align-items-center p-2">
              <h3>Price: {device.price} $</h3>
              <Button variant="success">Buy</Button>
            </Card>
          </Col>
        </Row>
        <Row className="mt-3">
          <h2>Specs</h2>
          <dl className="description-list">
            {descriptions.map(description =>
              <>
              <dt className="description-title" key={description.id}>{description.title}</dt>
              <dd className="description-text">{description.description}</dd>
            </>
            )}
          </dl>
        </Row>
      </Container>
    </div>
  )
}

export default DevicePage;
