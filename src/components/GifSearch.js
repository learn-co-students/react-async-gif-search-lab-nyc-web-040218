import React, { Component } from 'react'

export default class GifSearch extends Component {

    render(){
        return(
            <div>
                <form>
                    <input onChange={this.props.updateQueryTerms} type="text"/>
                </form>
            </div>
        )
    }
}