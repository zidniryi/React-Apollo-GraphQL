import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

class SongList extends Component {
  renderSong() {
    return this.props.data.songs.map((song) => {
      return (
        <li key={song.id} className="collection-item">
          {song.title}
        </li>
      );
    });
  }
  render() {
    console.log(this.props.data);
    if (this.props.data.loading) return <h1>Loading</h1>;
    return <ul className="collection">{this.renderSong()}</ul>;
  }
}

const query = gql`
  {
    songs {
      id
      title
    }
  }
`;
export default graphql(query)(SongList);
