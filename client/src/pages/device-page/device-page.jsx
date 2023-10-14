import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import './style.css';
import { useParams } from 'react-router-dom';
import { fetchOneDevice } from '../../http/device-api';

function DevicePage() {
  const [device, setDevice] = useState({info: []});
  const {id} = useParams();
  useEffect(() => {
    fetchOneDevice(id).then(data => setDevice(data));
  }, [])

  return (
    <div>
      <Container className='mt-5'>
        <Row>
          <Col md={4}>
            <Image
              src={process.env.REACT_APP_API_URL + device.img}
              height='300px'
              width='300px'
              style={{objectFit: 'cover'}}
            />
          </Col>
          <Col md={4}>
            <Row>
              <h2>{device.name}</h2>
              <div>Rating: {device.rating}</div>
            </Row>
          </Col>
          <Col md={4}>
            <Card className='d-flex flex-column align-items-center p-2'>
              <h3>Price: {device.price} $</h3>
              <Button variant='success'>Buy</Button>
            </Card>
          </Col>
        </Row>
        <Row className='mt-3'>
          <h2>Specs</h2>
          <dl className='description-list'>
            {device.info.map(description =>
              <>
              <dt className='description-title' key={description.id}>{description.title}</dt>
              <dd className='description-text'>{description.description}</dd>
            </>
            )}
          </dl>
        </Row>
      </Container>
    </div>
  )
}

export default DevicePage;
