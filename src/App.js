import React from "react";

import {Menu, Filter, Books, Aside} from './components'

function App() {

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
          <div className="body_cont">
            <main className="main-left">
                  <Filter/>
            <div className="after-filter"></div>
              <Books/>
            </main>
            <div className="aside-right">
             <Aside/>
            </div>
          </div>
        </div>
       </div>
    </div>
  );
}

export default App;
