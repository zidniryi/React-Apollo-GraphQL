import gql from "graphql-tag";
import React, { Component } from "react";
import { graphql } from "react-apollo";

class LyricList extends Component {
  onLike(id, likes) {
    this.props.mutate({
      variables: { id },
      //   Gak Begitu Guna
      optimisticResponse: {
        __typeName: "Mutation",
        likeLyric: {
          id: id,
          __typeName: "LyricType",
          likes: likes + 1,
        },
      },
    });
  }
  renderLyrics() {
    return this.props.lyrics.map(({ id, content, likes }) => {
      return (
        <li
          key={id}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          {content}
          <div onClick={() => this.onLike(id, likes)}>
            <span className="btn btn-success"> {likes} Like</span>
          </div>
        </li>
      );
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <ul className="list-group">{this.renderLyrics()}</ul>
      </div>
    );
  }
}

const mutation = gql`
  mutation LikeLyric($id: ID) {
    likeLyric(id: $id) {
      id
      likes
    }
  }
`;
export default graphql(mutation)(LyricList);
