import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';
import { Context } from '../..';

const Filter = observer(() => {
  const {device} = useContext(Context);
  return (
    <ListGroup>
      {device.types.map(type =>
        <ListGroupItem
          style={{cursor: "pointer"}}
          active={type.id === device.selectedType.id}
          key={type.id}
          onClick={() => {device.setSelectedType(type)}}
        >
          {type.name}
        </ListGroupItem>
      )}
    </ListGroup>
  );
});

export default Filter;
