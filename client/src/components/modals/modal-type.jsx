import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { createType } from '../../http/device-api';

function ModalType(props) {
  const [value, setValue] = useState('');
  const addType = () => {
    createType({name: value}).then(data => {
      setValue('');
      props.onHide();
    });
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
          Add Type
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId='formTypeName'>
            <Form.Label>Enter new type name</Form.Label>
            <Form.Control
              type='text'
              value={value}
              onChange={event => setValue(event.target.value)}
              placeholder='Type name'
            ></Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant='success'
          type='submit'
          onClick={addType}
        >Confirm</Button>
        <Button
          variant='danger'
          onClick={props.onHide}
        >Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalType;
