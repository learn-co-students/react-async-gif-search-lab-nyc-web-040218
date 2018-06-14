import React from 'react';

const GifSearch = props => {
  return (
    <form onSubmit={props.handleSearchSubmit}>
      Enter a Search Term:
      <input
        type="text"
        value={props.value}
        onChange={props.handleChange}
        />
      <button>Find Gifs</button>
    </form>
  )
}

export default GifSearch;
