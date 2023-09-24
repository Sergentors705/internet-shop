import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';
import { Context } from '../..';

const BrandFilter = observer(() => {
  const {device} = useContext(Context);
  return (
    <ListGroup horizontal className='flex-wrap'>
      {device.brands.map(brand =>
        <ListGroupItem
          style={{cursor: "pointer"}}
          active={brand.id === device.selectedBrand.id}
          key={brand.id}
          onClick={() => {device.setSelectedBrand(brand)}}
        >
          {brand.name}
        </ListGroupItem>
      )}
    </ListGroup>
  );
});

export default BrandFilter;
