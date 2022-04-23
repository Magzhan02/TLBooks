import React from 'react';
import axios from 'axios';

function Aside() {
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
    <aside className="aside-right">
      <h2 className='title'>Популярное</h2>
      <div className="tab-content">
        <img width={50} src={books.length > 0 ? books[0].book_image : 'null'} alt="book_image" />
        <div className="story-cont">{books.length > 0 ? books[0].title : 'null'}</div>
      </div>
    </aside>
  );
}

export default Aside;
