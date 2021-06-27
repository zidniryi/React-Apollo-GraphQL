import React from "react";
import { BrowserRouter, Route, Router, HashRouter } from "react-router-dom";
import SongCreate from "./components/SongCreate";
import SongList from "./components/SongList";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

const App = () => {
  return (
    <HashRouter>
      <Route path="/" exact component={SongList} />
      <Route path="/new" component={SongCreate} />
    </HashRouter>
  );
};

export default App;
