import React, { Component } from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

const URL1 = `http://api.giphy.com/v1/gifs/search?q=`;
const URL2 = `&api_key=dc6zaTOxFJmzC&rating=g`;

class GifListContainer extends Component {
  state = {
    value: '',
    gifs: null
  }

  submitSearch = event => {
    event.preventDefault();
    fetch(URL1 + this.state.value + URL2).then(r => r.json()).then(gifs => {
      const gifsArr = [gifs.data[0], gifs.data[1], gifs.data[2]];
      this.setState({
        value: '',
        gifs:gifsArr
      });
    })
  }

  change = event => {
    this.setState({ value: event.target.value })
  }

  render() {
    return (
      <React.Fragment>
        < GifSearch value={this.state.value} handleChange={this.change} handleSubmit={this.submitSearch}/>
        < GifList list={this.state.gifs}/>
      </React.Fragment>
    )
  }
}

export default GifListContainer;
