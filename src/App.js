import React from "react";
import axios from 'axios'

import {Menu, Filter} from './components'

function App() {

  const [books, setBooks] = React.useState([]);

  React.useEffect(() =>{
   async function fetch(){
    const {data} = await axios.get('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=XA0bjlKuuS6OFbbXG5yypU2W4xwX3Nif');
    setBooks(data.results.books)
   }
    fetch()
  },[])
  console.log(books)
  return (
      <div className="wrp">
       <div className="body">
         <div className="body_menu">
          <Menu/>
         </div>
        <div className="body_right">
            <div className="header_panel">
              <span className="speedbar">Книги</span>              
            </div>
              <main className="main-left">
                  <Filter/>
              <div className="after-filter"></div>
              <div className="bk-content">
              <img width={500} src={books.length > 0 ? books[0].book_image : 'null'} alt="book_image"/>
              </div>
              </main>
        </div>
       </div>
    </div>
  );
}

export default App;
