import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import SongCreate from "./components/SongCreate";
import SongList from "./components/SongList";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import SongDetail from "./components/SongDetail";

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={SongList} />
      <Route path="/new" component={SongCreate} />
      <Route path="/detail/:id" component={SongDetail} />
    </BrowserRouter>
  );
};

export default App;
