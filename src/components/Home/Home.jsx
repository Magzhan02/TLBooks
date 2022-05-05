import React from 'react';

import { Filter, Books, Aside } from '../../components';

import { useDispatch, useSelector } from 'react-redux';
import { getBooks, getHistory, addBookmark } from './../../toolkitRedux/Slice/Books';

function Home() {
  const dispatch = useDispatch();
  const { books, history } = useSelector(({ books }) => books);

  React.useEffect(() => {
    dispatch(getBooks());
    dispatch(getHistory());
  }, [dispatch]);

  const addFavoriteBook = (obj) => {
    dispatch(addBookmark(obj));
  };

  return (
    <div className="body_right">
      <div className="header_panel">
        <span className="speedbar">Книги</span>
      </div>
      <div className="body_cont">
        <main className="main-left">
          <Filter />
          <div className="after-filter"></div>
          {books &&
            books.map((b, index) => (
              <Books data={b} addFavoriteBook={addFavoriteBook} key={index} />
            ))}
        </main>
        <div className="aside-right">
          <h2 className="title">Популярное</h2>
          {history && history.map((h, index) => <Aside data={h} key={index} />)}
        </div>
      </div>
    </div>
  );
}
export default Home;
