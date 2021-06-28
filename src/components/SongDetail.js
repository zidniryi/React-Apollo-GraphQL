import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router-dom";
import fetchSong from "../queries/fetchSong";
import LyricCreate from "./LyricCreate";

class SongDetail extends Component {
  render() {
    console.log(this.props);
    const { song } = this.props.data;
    if (!song) {
      return (
        <div>
          <h1>Loading</h1>
        </div>
      );
    }
    return (
      <div className="container">
        <hr />
        <Link to="/">
          <span className="btn-link"> Back</span>
        </Link>
        <hr />
        <h1>Song Detail</h1>
        <h2>{song.title}</h2>
        <hr />
        <LyricCreate />
      </div>
    );
  }
}

export default graphql(fetchSong, {
  options: (props) => {
    return { variables: { id: props.match.params.id } };
  },
})(SongDetail);
