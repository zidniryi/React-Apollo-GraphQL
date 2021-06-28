import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

class LyricCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
    };
  }

  onSubmit(event) {
    event.preventDefault();
    this.props
      .mutate({
        variables: {
          content: this.state.content,
          songId: this.props.songId,
        },
      })
      .then(() => this.setState({ content: "" }));
  }
  render() {
    console.log(this.props);
    return (
      <div className="container-fluid">
        <form onSubmit={this.onSubmit.bind(this)}>
          <label className="form-label">Add Some Lyrics</label>
          <input
            className="form-control"
            value={this.state.content}
            onChange={(event) => this.setState({ content: event.target.value })}
          />
        </form>
      </div>
    );
  }
}

const mutation = gql`
  mutation AddLyricsSong($content: String, $songId: ID) {
    addLyricToSong(content: $content, songId: $songId) {
      id
      lyrics {
        content
      }
    }
  }
`;

export default graphql(mutation)(LyricCreate);
