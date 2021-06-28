import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router-dom";
import gql from "graphql-tag";

import query from "../queries/fetchSongs";

class SongList extends Component {
  onSongDelete(id) {
    this.props
      .mutate({ variables: { id } })
      .then(() => this.props.data.refetch());
  }

  renderSong() {
    return this.props.data.songs.map(({ id, title }) => {
      return (
        <li
          key={id}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          {title}
          <div onClick={() => this.onSongDelete(id)}>
            <span className="btn btn-danger">Delete</span>
          </div>
        </li>
      );
    });
  }
  render() {
    console.log(this.props.data);
    if (this.props.data.loading) return <h1>Loading</h1>;
    return (
      <div className="container-fluid">
        <hr />
        <Link to="/new">
          <div className="btn btn-dark">Add Song</div>
        </Link>
        <hr />
        <ul className="list-group">{this.renderSong()}</ul>
      </div>
    );
  }
}

const mutation = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`;

export default graphql(mutation)(graphql(query)(SongList));
