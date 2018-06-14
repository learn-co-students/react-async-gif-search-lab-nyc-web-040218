import React, { Component } from 'react'

export default class GifList extends Component {
    formatUrl = (url) => {
        return url.replace('//giphy','//media.giphy')
    }
    
    render(){
        console.log(this.props)
        const theseGifs = this.props.results.map(gifObj => <img key={gifObj.id} src={gifObj.images.original.url} alt={gifObj.type} />)
        return(
            <div>
                <ul>
                    {theseGifs}
                </ul>
            </div>
        )
    }
}