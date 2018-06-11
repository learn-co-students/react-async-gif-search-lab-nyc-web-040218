import React, {Component} from 'react'
import GifList from '../components/GifList';
//import PropTypes from 'prop-types'
import GifSearch from '../components/GifSearch';

class GifListContainer extends Component{
  state = {
    gifs: [],
    term: "hey"
  }

  componentDidMount(){
    this.fetchCall(this.state.term)
  }
  fetchCall = (key) => {
    let key_term = key
    let url = `http://api.giphy.com/v1/gifs/search?q=${key_term}&api_key=dc6zaTOxFJmzC&rating=g`

    fetch(url)
    .then(response=>response.json())
    .then(data=>
      this.setState({
        gifs: data.data
      })
    )
  }

  handleSearch = (event) => {
    event.preventDefault()
    let newSearch = event.target.children[0].value

    console.log("Search", newSearch);
    this.setState({
          term : newSearch
        }, () => {
          console.log("hi",this.state.term);
        })
    this.fetchCall(this.state.term)
  }

  render() {
    console.log(this.state.gifs, "render");
    return (
      <div>
        <GifSearch handleSearchChange={this.state.term} handleGifSearch={this.handleSearch}/>

        <GifList gifs={this.state.gifs}/>
      </div>
    );
  }
}

export default GifListContainer;
