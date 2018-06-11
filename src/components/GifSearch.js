import React from 'react'
// import PropTypes from 'prop-types'

class GifSearch extends React.Component{
  constructor(props){
    super(props);

  }



  render() {
    // value={this.state.searchTerm}
    // onChange={this.handleInput}
    return (
      <div>
        <form onSubmit={this.props.handleGifSearch}>
          <input type="text"  />
          <input type="submit"  value="Submit"/>
        </form>
      </div>
    )
  }
}

export default GifSearch
