import React from "react";

function App() {
  return (
      <div className="wrp">
       <div className="body">
         <div className="body_menu">
          <menu>
            <ul>
              <li>
                <img src="/image/book.svg" alt="icon"/>
              </li>
              <li>
                <img src="/image/user.svg" alt="user"/>
              </li>
              <li>
                <img src="/image/menu.svg" alt="menu"/>
              </li>
              <li>
              <img src="/image/sun.svg" alt="menu"/>
              </li>
            </ul>
          </menu>
         </div>

        <div className="body_right">
            <div className="header_panel">
              <span className="speedbar">Книги</span>              
            </div>
              <main className="main-left">
                  <from className="filter-block">
                    <div className="filter-cont">
                      <div className="filter-group">
                        <label for="other-name">Ключевое слово</label>
                        <input type="text" autocomplete="off" placeholder="Главный герой"/>
                      </div>
                      <button className="showcont-btn">Больше параметров</button>
                     {/*  <div className="filter-more"></div>*/}
                    </div>
                  </from>
              </main>
        </div>
       </div>
    </div>
  );
}

export default App;
