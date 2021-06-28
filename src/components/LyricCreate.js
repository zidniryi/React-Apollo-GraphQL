import React, { Component } from "react";

class LyricCreate extends Component {
  render() {
    return (
      <div className="container-fluid">
        <form>
          <label className="form-label">Add Some Lyrics</label>
          <input className="form-control" />
        </form>
      </div>
    );
  }
}

export default LyricCreate;
