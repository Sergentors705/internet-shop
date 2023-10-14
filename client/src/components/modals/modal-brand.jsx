import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { createBrand } from '../../http/device-api';

function ModalBrand(props) {
  const [value, setValue] = useState('');
  const addBrand = () => {
    createBrand({name: value}).then(data => {
      setValue('');
      props.onHide();
    })
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
          Add Brand
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId='formBrandName'>
            <Form.Label>Enter new brand name</Form.Label>
            <Form.Control
              type='text'
              value={value}
              onChange={event => setValue(event.target.value)}
              placeholder='Brand name'
            ></Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant='success'
          type='submit'
          onClick={addBrand}
        >Confirm</Button>
        <Button
          variant='danger'
          onClick={props.onHide}
        >Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalBrand;
