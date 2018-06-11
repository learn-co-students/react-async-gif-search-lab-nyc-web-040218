import React from 'react'

const URL="https://giphy.com/gifs/"

const GifList = (props) => {
  // debugger
  return(
    <div>
      <ul>
        {props.gifs.map(gif =>
          <li key={gif.id}><img src={gif.images.downsized.url}/></li>
        )}
      </ul>
    </div>
  )
}

export default GifList;
