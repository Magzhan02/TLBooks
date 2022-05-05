import React from "react";
import { Routes, Route } from "react-router-dom";
import {Menu, Home, Bookmark } from './components'

function App() {
  return (
    <div className="wrp">
      <div className="body">
        <div className="body_menu">
          <Menu/>
        </div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="bookmark" element={<Bookmark/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
