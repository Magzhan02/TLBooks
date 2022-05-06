import React from 'react';
import Books2 from '../Books/Books2';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Bookmark() {
  const data = useSelector(({ books }) => books.bookmark);
  return (
    <div className="bookmark__wrapper">
      <h1 className="bookmark__title">Закладки:</h1>
      {data.length > 0 ? (
        data.map((b, index) => <Books2 data={b} key={index} />)
      ) : (
        <div className="bookmark__empty">
          <h3>У вас еще нет закладок</h3>
          <Link to="/">
            <div className="bookmark__redirect">Перейти на главную страницу</div>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Bookmark;
