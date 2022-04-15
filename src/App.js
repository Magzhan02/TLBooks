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
                      <div className="filter-more">
                        <div className="filter-combo">
                          <div className="form-group">
                            <label>Год выпуска от</label>
                            <input type="text" className="year" autocomplete="off" placeholder="1990"/>
                          </div>
                          <div className="form-group">
                            <label>Год выпуска до</label>
                            <input type="text" className="year" autocomplete="off" placeholder="2022"/>
                          </div>
                        </div>
                        <div className="filter-combo">
                          <div className="form-group">
                            <label>Количество страниц от</label>
                            <input type="text" className="year" autocomplete="off" placeholder="50"/>
                          </div>
                          <div className="form-group">
                            <label>Количество страниц до</label>
                            <input type="text" className="year" autocomplete="off" placeholder="1000"/>
                          </div>
                        </div>
                        <div className="filter-combo">
                          <div className="form-group">
                            <label>Язык оригинала</label>
                            <div className="checklist">
                              <button>Китайский</button>
                              <button>Корейский</button>
                              <button>Русский</button>
                              <button>Японский</button>
                              <button>Английский</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="group-btn">
                      <button className="search">Поиск</button>
                      <button className="clear">Сбросить</button>
                    </div>
                  </from>
              </main>
        </div>
       </div>
    </div>
  );
}

export default App;
