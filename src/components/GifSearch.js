import React from 'react';

const GifSearch = (props) => (
    <form onSubmit={props.capture}>
        <input id="searchWord" type="text" name="search" />
        <input type="submit" name="search >" />
    </form>
)

export default GifSearch