import React from "react";
import axios from 'axios';
import {Menu, Filter, Books, Aside} from './components'

function App() {
  return (
    <div className="wrp">
      <div className="body">
        <div className="body_menu">
          <Menu/>
        </div>
        <Home/>
      </div>
    </div>
  );
}


function Home(){
    const [books, setBooks] = React.useState([]);
    const [history, setHistory] = React.useState([]);
    const [data, setData] = React.useState([]);
  
    React.useEffect(() => {
      async function fetch() {
        const { data } = await axios.get(
          'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=XA0bjlKuuS6OFbbXG5yypU2W4xwX3Nif',
        );
        setData(data.results);
        setBooks(data.results.books);

        const history = await axios.get(
          'https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=XA0bjlKuuS6OFbbXG5yypU2W4xwX3Nif',
        );
        setHistory(history.data.results);
      }
      fetch()
      
    }, []);
  
  return (
    <div className="body_right">
      <div className="header_panel">
        <span className="speedbar">Книги</span>              
      </div>
      <div className="body_cont">
        <main className="main-left">
          <Filter/>
        <div className="after-filter"></div>
          {
          books &&
          books.map((b, index) => (
          <Books data={b} key={index}/>))
          }
        </main>
        <div className="aside-right">
          <h2 className="title">Популярное</h2>
           {
           history &&
           history.map((h, index) => (
            <Aside data={h} key={index}/>
            ))
            }
        </div>
      </div>
    </div>
  )
}

export default App;
