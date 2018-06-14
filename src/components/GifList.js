import React from 'react'


class GifList extends React.Component {

showGifs(){
  return [...this.props.gifs]
  // this.props.gifs.map(gif => {
  //   return gif
  // })
}

  render () {
    const gifTags = this.showGifs()
    return(
      <div>
        {gifTags}
      </div>
    )
  }
}

export default GifList;
