import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Context } from "../..";

function ModalDevice(props) {
  const {device} = useContext(Context);
  const [info, setInfo] = useState([]);
  const addInfo = () => {
    setInfo([...info, {title: '', description: '', number: Date.now()}])
  };
  const removeInfo = (number) => {
    setInfo(info.filter(element => element.number !== number));
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Device
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row className='d-flex' style={{gap: "10px"}}>
            <Dropdown style={{width: "fit-content"}}>
              <Dropdown.Toggle>Select type</Dropdown.Toggle>
              <Dropdown.Menu>
                {device.types.map(element =>
                  <Dropdown.Item key={element.id}>{element.name}</Dropdown.Item>
                )}
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown style={{width: "fit-content"}}>
              <Dropdown.Toggle>Select brand</Dropdown.Toggle>
              <Dropdown.Menu>
                {device.brands.map(element =>
                  <Dropdown.Item key={element.id}>{element.name}</Dropdown.Item>
                )}
              </Dropdown.Menu>
            </Dropdown>
          </Row>
          <Form.Group>
            <Form.Label className="mt-3">Enter device name</Form.Label>
            <Form.Control type='text' placeholder="Device name"></Form.Control>
            <Form.Label className="mt-3">Enter device price</Form.Label>
            <Form.Control type='number' placeholder="Device price"></Form.Control>
            <Form.Label className="mt-3">Choose device picture</Form.Label>
            <Form.Control type='file' ></Form.Control>
          </Form.Group>
          <Button
            className="mt-3"
            onClick={addInfo}
          >Add new property</Button>
          {info.map(element =>
            <Form.Group className='mt-4' key={element.number}>
              <Form.Control
                className="mt-2"
                placeholder="Enter property name"
              />
              <Form.Control
                className="mt-2"
                placeholder="Enter property value"
              />
              <Button
                variant="warning"
                className="mt-3"
                onClick={() => removeInfo(element.number)}
              >
                Delete property
              </Button>
            </Form.Group>
          )}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" type="submit">Confirm</Button>
        <Button variant="danger" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalDevice;
