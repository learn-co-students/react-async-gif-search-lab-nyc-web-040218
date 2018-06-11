import React from 'react'
import GifSearch from '../components/GifSearch.js'
import GifList from '../components/GifList.js'

const URL = "http://api.giphy.com/v1/gifs/search?q="
const API_KEY = "&api_key=dc6zaTOxFJmzC&rating=g"

export default class GifListContainer extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      gifs: [],
      value: ''
    }
  }

  inputChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  searchSubmit = (event) => {
    event.preventDefault()
    const inputValue = event.target.children[1].value
    fetch(URL + inputValue + API_KEY)
    .then(res => res.json())
    .then(gifs => {
      let newGifs = []
      newGifs.push(gifs.data[0])
      newGifs.push(gifs.data[1])
      newGifs.push(gifs.data[2])
      this.setState({
        gifs: newGifs,
        value: ''
      })})
  }

  render(){
    return (
      <div>
      <GifSearch value={this.state.value} searchSubmit={this.searchSubmit} inputChange={this.inputChange} />
      <GifList gifs={this.state.gifs}/>
      </div>
    )

  }
}
