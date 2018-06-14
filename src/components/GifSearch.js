import React from 'react'


class GifSearch extends React.Component {


  handleChange = (e) => this.props.handleChange
  handleSubmit = (e) => this.props.handleSubmit

  render () {
    return(
      <div>
        <form onSubmit={this.handleSubmit()}>
          <input type='text' placeholder='What GIF do you want to see?' onChange={this.handleChange()}/>
          <input type='submit'/>
        </form>
      </div>
    )
  }
}

export default GifSearch;
