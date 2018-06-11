import React from 'react'
//import PropTypes from 'prop-types'

export const GifList = ({gifs})=>{

    return (
      <div>
        <ul>
          {gifs.map(gif=>{
            return <li key={gif.id}> <img src={gif.images.original.url
} alt=""/></li>
          })}

        </ul>
      </div>
    );

}

export default GifList;
