import React from "react";
import { Routes, Route, Switch } from "react-router-dom";
import {Menu, Home } from './components'

function App() {
  return (
    <div className="wrp">
      <div className="body">
        <div className="body_menu">
          <Menu/>
        </div>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
