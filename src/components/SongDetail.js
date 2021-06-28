import React, { Component } from "react";
import { graphql } from "react-apollo";
import fetchSong from "../queries/fetchSong";

class SongDetail extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Song Detail</h1>
      </div>
    );
  }
}

export default graphql(fetchSong, {
  options: (props) => {
    return { variables: { id: props.match.params.id } };
  },
})(SongDetail);
