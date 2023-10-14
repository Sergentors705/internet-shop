import React, { useContext, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Filter from '../../components/filter/filter';
import BrandFilter from '../../components/brand-filter/brand-filter';
import DeviceList from '../../components/device-list/device-list';
import { observer } from 'mobx-react-lite';
import { Context } from '../..';
import { fetchBrands, fetchDevice, fetchTypes } from '../../http/device-api';
import CustomPagination from '../../components/pagination/pagination';

const Shop = observer(() => {
  const {device} = useContext(Context);

  useEffect(() => {
    fetchTypes().then(data => device.setTypes(data));
    fetchBrands().then(data => device.setBrands(data));
    fetchDevice(null, null, 1, 2).then(data => {
      device.setDevices(data.rows)
      device.setTotalCount(data.count)
    });
  }, []);

  useEffect(() => {
    fetchDevice(device.selectedType.id, device.selectedBrand.id, device.page, 2).then(data => {
      device.setDevices(data.rows)
      device.setTotalCount(data.count)
    });
  }, [device.page, device.selectedType, device.selectedBrand]);

  return (
    <Container>
      <Row className='mt-2'>
        <Col md={3}>
            <Filter />
        </Col>
        <Col md={9}>
          <BrandFilter />
        </Col>
      </Row>
      <DeviceList />
      <CustomPagination />
    </Container>
  )
});

export default Shop;
