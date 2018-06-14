import React, { Component } from 'react'
import _ from 'lodash'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

export default class GifListContainer extends Component {
    state = {
        queryTerms: '',
        gifResults: []
    }

    makeFetchHappen = () => {
        fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.queryTerms}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
        .then(res => res.json())
        .then(data => {
            this.setState({ gifResults: [...data.data] })
        })
    }

    // delayFetch = () => {
    //     _.delay(() => this.makeFetchHappen(), 2000)
    // }

    // componentDidUpdate() { 
    //     _.delay(()=> this.makeFetchHappen(), 1000)
    // }

    updateQueryTerms = (event) => {
        const queryTerms = event.target.value
        this.setState({queryTerms}, this.makeFetchHappen)
    }
    
    render() {
        console.log(this.state.gifResults)
        return(
            <div>
                <GifList results={this.state.gifResults}/>
                <GifSearch updateQueryTerms={this.updateQueryTerms} /*queryTerms={this.state.queryTerms}*//>
            </div>
        )
    }
}