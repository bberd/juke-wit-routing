import React, { Component, Link } from "react";

export default class AllArtists extends Component {
  constructor() {
    super();
    this.state = {
      artists: []
    };
  }

  render() {
    return (
      <div>
        <h3>Artists</h3>
        <div className="list-group">
          {this.state.artists.map(artist => {
            return (
              <div className="list-group-item" key={artist.id}>
                {/* determine where to actually Link to later! */}
                <Link to="">
                  {artist.name}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
