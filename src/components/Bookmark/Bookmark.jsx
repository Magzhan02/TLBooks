import React from 'react';
import Books2 from '../Books/Books2';

import { useSelector } from 'react-redux';

function Bookmark() {
  const data = useSelector(({ books }) => books.bookmark);
  return (
    <div className='bookmark__wrapper'>
      <h1 className='bookmark__title'>Закладки</h1>
      {data ? data.map((b, index) => <Books2 data={b} key={index} />) : <h2>Empty</h2>}
    </div>
  );
}

export default Bookmark;
