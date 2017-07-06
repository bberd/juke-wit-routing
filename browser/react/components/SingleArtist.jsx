import axios from "axios"
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Songs from '../components/Songs';

export default class SingleArtist extends Component {
  constructor() {
    super()
    this.state = {
      artistAlbums: [],
      artistSongs: []
    }
  }

  componentDidMount() {
    axios.get(`/api/artists/${this.props.match.params.id}/albums`).then(res => res.data).then(artistAlbums => {
      this.setState({ artistAlbums });
    });
    axios.get(`/api/artists/${this.props.match.params.id}/songs`).then(res => res.data).then(artistSongs => {
      this.setState({ artistSongs });
    });
  }

  render () {
    const artistAlbums = this.state.artistAlbums;
    const artistSongs = this.state.artistSongs;

    return (
      <div className="artist">
        <div>
        <h3>Albums</h3>
        <div className="row">
          {artistAlbums.map(album =>
            <div className="col-xs-4" key={album.id}>
              { console.log(this.props.match.params.id)}
              <Link to={`/albums/${album.id}`} className="thumbnail">
                <img src={album.imageUrl} />
                <div className="caption">
                  <h5>
                    <span>
                      {album.name}
                    </span>
                  </h5>
                  <small>
                    {album.songs.length} songs
                  </small>
                </div>
              </Link>
            </div>
          )}
            <Songs songs={artistSongs} />

        </div>
      </div>

    </div>
    );
  }
}
