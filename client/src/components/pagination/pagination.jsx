import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import { Context } from '../..';

const CustomPagination = observer(() => {
  const {device} = useContext(Context);
  const pageCount = Math.ceil(device.totalCount / device.limit);
  const pages = [];

  for (let i = 0; i < pageCount; i++) {
    pages.push(i + 1);
  }

  return (
    <Pagination className='mt-3'>
      {pages.map(page =>
        <Pagination.Item
          active={device.page === page}
          key={page}
          onClick={() => device.setPage(page)}
        >{page}</Pagination.Item>
      )}
    </Pagination>
  )
});

export default CustomPagination;
