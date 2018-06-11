import React from 'react'

export default class GifSearch extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      gifs: [],
    }
  }

  render(){
    return (
      <div>
        <form onSubmit={this.props.searchSubmit}>
        <label>Enter a search term: </label>
        <input type="text" value={this.props.value} onChange={this.props.inputChange}/>
        <button type="submit">Search</button>
        </form>
      </div>
    )

  }
}
