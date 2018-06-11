import React from 'react';

const GifList = (props) => (
    <li>
        <img src={`${props.gifInfo.images.downsized.url}`} alt="" />
    </li>
    
)

export default GifList