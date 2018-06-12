import React from 'react';

const GifSearch = (props) => {
  return (
    <div>
    <form onSubmit={props.handleSearch}>
      <input value={props.query} onChange={props.updateQuery} />
    </form>
    </div>
  )
}

export default GifSearch
