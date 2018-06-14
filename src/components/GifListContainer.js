import React, { Component } from 'react';
import GifList from './GifList'
import GifSearch from './GifSearch'
const URL = 'http://api.giphy.com/v1/gifs/search?q=';
const URL2 = '&api_key=dc6zaTOxFJmzC&rating=g';

class GifListContainer extends Component {
  state = {
    searchTerm: '',
    gifs: []
  }

  submitSearch = event => {
    event.preventDefault()
    fetch(URL + this.state.searchTerm + URL2)
    .then(r => r.json())
    .then(gifs => {
      const gifsArr = [gifs.data[0], gifs.data[1], gifs.data[2]];
      this.setState({
        searchTerm: '',
        gifs:gifsArr
      })
    });
  }

  newSearch = event => {
    this.setState({ searchTerm: event.target.value })
  }


  render() {
    return(
      <div>
        <GifSearch
          value={this.state.searchTerm}
          handleChange={this.newSearch}
          handleSearchSubmit={this.submitSearch}
          />
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }
}

export default GifListContainer;
