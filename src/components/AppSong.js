import React, { Component } from "react";
import SongList from "./SongList";

export default class AppSong extends Component {
  render() {
    return (
      <div className="container">
        <SongList />
      </div>
    );
  }
}
