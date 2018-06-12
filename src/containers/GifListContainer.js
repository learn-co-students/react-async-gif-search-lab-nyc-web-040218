import React from 'react';
import GifSearch from '../components/GifSearch';
import GifList from '../components/GifList';

const URL = 'http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&rating=g&q='

class GifListContainer extends React.Component {
  state = {
    query: "",
    gifs: null
  }

  fetchGifs = () => {
    fetch(URL + this.state.query).then(res => res.json()).then(gifs => {
      const gifArr = [...gifs.data]
      gifArr.length = 3
      this.setState( {gifs: gifArr} )
    } )
  }

  updateQuery = (e) => {
    this.setState({
      query: e.target.value
    })
  }

  handleSearch = (e) => {
    e.preventDefault()
    this.fetchGifs()
  }

  render() {
    return (
      <div>
        <GifSearch query={this.state.query} updateQuery={this.updateQuery}handleSearch={this.handleSearch} />
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }
}

export default GifListContainer
