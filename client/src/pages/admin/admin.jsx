import React from "react";
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import ModalBrand from "../../components/modals/modal-brand";
import ModalDevice from "../../components/modals/modal-device";
import ModalType from "../../components/modals/modal-type";

function Admin() {
  const [modalTypeShow, setModalTypeShow] = React.useState(false);
  const [modalBrandShow, setModalBrandShow] = React.useState(false);
  const [modalDeviceShow, setModalDeviceShow] = React.useState(false);
  return (
    <>
      <Container
        className="d-flex justify-content-center align-items-center mt-3"
        style={{gap: "10px"}}
      >
        <Button
          variant="primary"
          onClick={() => setModalTypeShow(true)}
        >
          Add Type
        </Button>
        <Button
          variant="primary"
          onClick={() => setModalBrandShow(true)}
        >
          Add Brand
        </Button>
        <Button
          variant="primary"
          onClick={() => setModalDeviceShow(true)}
        >
          Add Device
        </Button>
      </Container>
      <ModalType
        show={modalTypeShow}
        onHide={() => setModalTypeShow(false)}
      />
      <ModalBrand
        show={modalBrandShow}
        onHide={() => setModalBrandShow(false)}
      />
      <ModalDevice
        show={modalDeviceShow}
        onHide={() => setModalDeviceShow(false)}
      />
    </>
  )
}

export default Admin;
