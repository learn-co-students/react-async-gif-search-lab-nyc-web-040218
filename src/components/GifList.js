import React from 'react';

const GifList = props => {
  let list = null;
  console.log(props.list);
  if (props.list) {
    list = props.list.map(list => <li key={list.id}><img src={list.images.downsized.url} alt=''/></li>)
  }

  return (
    <ul>
      {list}
    </ul>
  )
}

export default GifList;
