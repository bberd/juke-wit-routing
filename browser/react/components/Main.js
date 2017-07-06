import React, { Component } from "react";
import StatefulAlbums from "./StatefulAlbums.jsx";
import SingleAlbum from "./SingleAlbum";
import SingleArtist from "./SingleArtist.jsx";
import Sidebar from "./Sidebar";
import Player from "./Player";
import { HashRouter, Route } from "react-router-dom";
import AllArtists from "./AllArtists.jsx";


export default class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div id="main" className="container-fluid">
          <div className="col-xs-2">
            <Sidebar />
          </div>

          <div className="col-xs-10">
            <Route exact path="/" component={StatefulAlbums} />
            <Route exact path="/albums" component={StatefulAlbums} />
            <Route exact path="/albums/:id" component={SingleAlbum} />
            <Route exact path="/artists/:id" component={SingleArtist} />
            <Route exact path="/artists" component={AllArtists} />
          </div>

          <Player />
        </div>
      </HashRouter>
    );
  }
}
