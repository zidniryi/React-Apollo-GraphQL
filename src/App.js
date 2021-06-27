import React from "react";
import { BrowserRouter, Route, Router } from "react-router-dom";
import SongCreate from "./components/SongCreate";
import SongList from "./components/SongList";

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={SongList} />
      <Route path="/new" component={SongCreate} />
    </BrowserRouter>
  );
};

export default App;
