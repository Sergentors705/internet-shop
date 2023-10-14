import { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Context } from '../..';
import { createDevice, fetchBrands, fetchTypes } from '../../http/device-api';
import { observer } from 'mobx-react-lite';

const ModalDevice = observer((props) => {
  const {device} = useContext(Context);
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState(null);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetchTypes().then(data => device.setTypes(data));
    fetchBrands().then(data => device.setBrands(data));
  }, [])

  const addInfo = () => {
    setInfo([...info, {title: '', description: '', number: Date.now()}])
  };

  const removeInfo = (number) => {
    setInfo(info.filter(element => element.number !== number));
  };

  const changeInfo = (key, value, number) => {
    setInfo(info.map(i => i.number === number ? {...i, [key]:value} : i))
  }

  const selectFile = event => {
    setFile(event.target.files[0]);
  }

  const addDevice = () => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', `${price}`);
    formData.append('brandId', device.selectedBrand.id);
    formData.append('typeId', device.selectedType.id);
    formData.append('info', JSON.stringify(info));
    formData.append('img', file);
    createDevice(formData).then(data => props.onHide());
  }

  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          Add Device
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row className='d-flex' style={{gap: '10px'}}>
            <Dropdown style={{width: 'fit-content'}}>
              <Dropdown.Toggle>{device.selectedType.name || "Select type"}</Dropdown.Toggle>
              <Dropdown.Menu>
                {device.types.map(element =>
                  <Dropdown.Item
                    onClick={() => device.setSelectedType(element)}
                    key={element.id}
                  >
                    {element.name}
                  </Dropdown.Item>
                )}
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown style={{width: 'fit-content'}}>
              <Dropdown.Toggle>{device.selectedBrand.name || "Select brand"}</Dropdown.Toggle>
              <Dropdown.Menu>
                {device.brands.map(element =>
                  <Dropdown.Item
                    onClick={() => device.setSelectedBrand(element)}
                    key={element.id}
                  >
                    {element.name}
                  </Dropdown.Item>
                )}
              </Dropdown.Menu>
            </Dropdown>
          </Row>
          <Form.Group>
            <Form.Label className='mt-3'>Enter device name</Form.Label>
            <Form.Control
              onChange={event => setName(event.target.value)}
              value={name}
              type='text'
              placeholder='Device name'
            />
            <Form.Label className='mt-3'>Enter device price</Form.Label>
            <Form.Control
              onChange={event => setPrice(Number(event.target.value))}
              value={price}
              type='number'
              placeholder='Device price'
            />
            <Form.Label className='mt-3'>Choose device picture</Form.Label>
            <Form.Control
              type='file'
              onChange={selectFile}
            />
          </Form.Group>
          <Button
            className='mt-3'
            onClick={addInfo}
          >Add new property</Button>
          {info.map(element =>
            <Form.Group className='mt-4' key={element.number}>
              <Form.Control
                className='mt-2'
                value={element.title}
                onChange={(event) => changeInfo('title', event.target.value, element.number)}
                placeholder='Enter property name'
              />
              <Form.Control
                className='mt-2'
                value={element.description}
                onChange={(event) => changeInfo('description', event.target.value, element.number)}
                placeholder='Enter property value'
              />
              <Button
                variant='warning'
                className='mt-3'
                onClick={() => removeInfo(element.number)}
              >
                Delete property
              </Button>
            </Form.Group>
          )}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='success' onClick={addDevice}>Confirm</Button>
        <Button variant='danger' onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
});

export default ModalDevice;
