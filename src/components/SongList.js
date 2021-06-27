import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router-dom";
import query from "../queries/fetchSongs";

class SongList extends Component {
  renderSong() {
    return this.props.data.songs.map((song) => {
      return (
        <li key={song.id} className="list-group-item">
          {song.title}
        </li>
      );
    });
  }
  render() {
    console.log(this.props.data);
    if (this.props.data.loading) return <h1>Loading</h1>;
    return (
      <div class="container-fluid">
        <hr />
        <Link to="/new">
          <div class="btn btn-dark">Add Song</div>
        </Link>
        <hr />
        <ul className="list-group">{this.renderSong()}</ul>
      </div>
    );
  }
}

export default graphql(query)(SongList);
