import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Filter from "../../components/filter/filter";
import BrandFilter from "../../components/brand-filter/brand-filter";
import DeviceList from "../../components/device-list/device-list";

function Shop() {
  return (
    <Container>
      <Row className="mt-2">
        <Col md={3}>
            <Filter />
        </Col>
        <Col md={9}>
          <BrandFilter />
        </Col>
      </Row>
      <DeviceList />
    </Container>
  )
}

export default Shop;
