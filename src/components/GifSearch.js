import React from 'react';

const GifSearch = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      Enter a Search Term:
      <input type="text" value={props.value} onChange={props.handleChange}/>
      <button>Find Gifs</button>
    </form>
  )
}

export default GifSearch;
