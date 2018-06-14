import React from 'react'
import GifSearch from '../components/GifSearch.js'
import GifList from '../components/GifList.js'
import UUID from 'uuid'

class GifListContainer extends React.Component {
  constructor(){
    super()

    this.state = {
      search: "Ralph",
      gifs: []
    }
  }

  handleChange = (e) => {
    this.setState({
      search: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state.search)
    this.searchForGIfs()
  }

  firstThreeGifs(gifs){
    this.setState({gifs})
    for(let i=0; i < 3; i++){
      this.setState({
        gifs: [...this.state.gifs, <img key={UUID()} alt="" src={gifs.data[i].images.downsized.url} />]
      })
    }
    console.log(this.state)
  }

  searchForGIfs = () =>{
    fetch(`http://api.giphy.com/v1/gifs/search?q=` + this.state.search + `&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(res => res.json())
    .then(json => this.firstThreeGifs(json))
  }

  componentDidMount(){
    this.searchForGIfs()
  }
  render () {
    return(
      <div>
        <GifSearch handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        <GifList gifs={this.state.gifs}/>
      </div>
    )
  }
}

export default GifListContainer;
