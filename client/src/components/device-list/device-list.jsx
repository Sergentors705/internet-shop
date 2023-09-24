import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '../..';
import Row from 'react-bootstrap/esm/Row';
import Card from 'react-bootstrap/Card';
import CardImg from 'react-bootstrap/esm/CardImg';
import { useNavigate } from 'react-router-dom';

const DeviceList = observer(() => {
  const {device} = useContext(Context);
  const navigate = useNavigate();

  return (
    <Row className='d-flex flex-wrap mt-5' style={{gap: "20px"}}>
      {device.devices.map(device =>
        <Card key={device.id} className="justify-content-between" style={{flexBasis: "fit-content"}}
        onClick={() => navigate(`/device/:${device.id}`)}
        >
          <CardImg src={`/img/${device.img}`}
            style={{objectFit: "cover", width: "200px", height: "200px"}}
          />
          <Card.Body>
            <Card.Title>{device.name}</Card.Title>
            <Card.Subtitle>{"Price: " + device.price + " $"}</Card.Subtitle>
            <Card.Text>{"Rating: " + device.rating}</Card.Text>
          </Card.Body>
        </Card>
)}
    </Row>
      );
});

export default DeviceList;
