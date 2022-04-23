import React from 'react';
import axios from 'axios';

function Books() {
  const [books, setBooks] = React.useState([]);
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    async function fetch() {
      const { data } = await axios.get(
        'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=XA0bjlKuuS6OFbbXG5yypU2W4xwX3Nif',
      );
      setData(data.results);
      setBooks(data.results.books);
    }
    fetch();
  }, []);
  console.log(books);

  return (
    <div className="bk-content">
      <article>
        <div className="book-desc">
          <img src={books.length > 0 ? books[0].book_image : 'null'} alt="book_image" />
          <div className="book-cont">
            <h2>{books.length > 0 ? books[0].title : 'null'}</h2>
            <h3>{data.published_date}</h3>
            <div className="overview">{books.length > 0 ? books[0].description : 'null'}</div>
            <div className="book-info">
              <div className="author">author: {books.length > 0 ? books[0].author : 'null'}</div>
              <div className="publisher">
                publisher: {books.length > 0 ? books[0].publisher : 'null'}
              </div>
            </div>
          </div>
        </div>
        <div className="book-tool">
          <div className="btn link">buy link</div>
          <div className="marker">
            <img src="/image/bookmark.svg" alt="marker"/>
            Закладка
          </div>
        </div>
      </article>
    </div>
  );
}

export default Books;
