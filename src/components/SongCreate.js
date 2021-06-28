import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { Link } from "react-router-dom";
import query from "../queries/fetchSongs";

class SongCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }

  onSubmit(event) {
    event.preventDefault();
    try {
      this.props.mutate({
        variables: {
          title: this.state.title,
        },
        refetchQueries: [{ query }],
      });
      this.props.history.push("/");
    } catch (error) {
      alert(error);
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <form onSubmit={this.onSubmit.bind(this)}>
          <h1>Add Song</h1>
          <hr />
          <Link to="/">
            <div className="btn btn-link">Back</div>
          </Link>
          <hr />
          <input
            onChange={(event) => this.setState({ title: event.target.value })}
            value={this.state.title}
            className="form-control"
          />
        </form>
      </div>
    );
  }
}

const mutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      title
    }
  }
`;

export default graphql(mutation)(SongCreate);
