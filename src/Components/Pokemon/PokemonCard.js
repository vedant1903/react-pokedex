import React, { Component } from 'react'

export default class PokemonCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            pokename: ''
        }
    }

    componentDidMount(){
        console.log(this.props.name)
        this.setState({
            pokename: this.props.name
        })
    }

    render() {
        return (
            <div className="pokemon-card">
                <h1>{this.state.pokename}</h1>
            </div>
        )
    }
}
