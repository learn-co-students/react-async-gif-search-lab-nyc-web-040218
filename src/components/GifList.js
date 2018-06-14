import React from 'react';

const GifList = props => {
  let gifs = null;
  console.log(props.gifs);
  if (props.gifs) {
    gifs = props.gifs.map(gifs => <li key={gifs.id}><img src={gifs.images.downsized.url} alt=''/></li>)
  }

  return (
    <ul>
      {gifs}
    </ul>
  )
}

export default GifList;
