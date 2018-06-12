import React from 'react';

class GifList extends React.Component {
  shouldComponentUpdate(nextProps) {
    return (nextProps.gifs !== null && !nextProps.gifs.includes(undefined))
  }
  render() {
    const imgsTags = this.props.gifs ? this.props.gifs.map(gif => <li key={gif.id}><img src={gif.images.downsized.url} /></li>) : null

    return (
      <div>
        {imgsTags}
      </div>
    )
  }
}

export default GifList
