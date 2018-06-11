import React from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch'
import UUID from 'uuid';

const URL = 'http://api.giphy.com/v1/gifs/search?q=wut&api_key=dc6zaTOxFJmzC&rating=g';

class GifListContainer extends React.Component {
    state = {
        gifs: []
    }

    componentWillMount() {
        this.getData();
    }

    getData = () => {
        fetch(URL).then( response => response.json() ).then(array => {
            // console.log(array.data);
            this.setState({
                gifs: [...array.data.splice(0, 3)]
            });
        });
    }

    searchGiphy = (phrase) => {
        fetch(`http://api.giphy.com/v1/gifs/search?q=${phrase}&api_key=dc6zaTOxFJmzC&rating=g`).then( response => response.json() ).then(array => {
            // console.log(array.data);
            this.setState({
                gifs: [...array.data.splice(0, 3)]
            });
        });
    }

    getState = () => {
        console.log(this.state.gifs);
    }

    compileGifs = () => {
        if (this.state.gifs.length > 0){
           return this.state.gifs.map((gif, idx) => (
                <GifList key={idx} id={UUID()} gifInfo={gif} />
            ));
        }
    }

    captureData = (e) => {
        e.preventDefault();
        this.searchGiphy(e.target.searchWord.value);
        e.target.reset();
    }

    render() {
        const compileGifs = this.compileGifs();
        return (
            <div>
                < GifSearch capture={this.captureData} />
                {compileGifs}
            </div>
        )
    }
}

export default GifListContainer