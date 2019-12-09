import React, { Component } from 'react'
import Header from './Header'
import axios from 'axios'

export class NewBeer extends Component {
    state = {
        name: "",
        description: "",
        tagline: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: "",
        contributed_by: ""

    }
    
    handleInput = (event) => {
        const { name, value } = event.target;

        this.setState({ [name]: value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { name,
                description,
                tagline,
                first_brewed,
                brewers_tips,
                attenuation_level,
                contributed_by
                } = this.state;

        axios.post('https://ih-beers-api2.herokuapp.com/beers/new',
        {   name,
            description,
            tagline,
            first_brewed,
            brewers_tips,
            attenuation_level,
            contributed_by }
        )
        .then( (res) => {
            // this.props.getData()
            this.setState({   name: "",
            description: "",
            tagline: "",
            first_brewed: "",
            brewers_tips: "",
            attenuation_level: "",
            contributed_by: ""
    })
    console.log(res.data)
        })
        .catch( (err) => console.log(err));
    }

    render() {
        return (
            <div>
            <Header />

            <form onSubmit={this.handleSubmit}>
                <label>Name</label>
                <input 
                    type="text" 
                    value={this.state.name} 
                    name="name" 
                    onChange={this.handleInput}
                />

                 <label>Description</label>
                <input 
                    type="text" 
                    value={this.state.description} 
                    name="description" 
                    onChange={this.handleInput}
                />
                 <label>Tagline</label>
                <input 
                    type="text" 
                    value={this.state.tagline} 
                    name="tagline" 
                    onChange={this.handleInput}
                />
                 <label>First Brewed</label>
                <input 
                    type="text" 
                    value={this.state.first_brewed} 
                    name="first_brewed" 
                    onChange={this.handleInput}
                />
                 <label>Brewers Tips</label>
                <input 
                    type="text" 
                    value={this.state.brewers_tips} 
                    name="brewers_tips" 
                    onChange={this.handleInput}
                />
                 <label>Attenuation Level</label>
                <input 
                    type="Number" 
                    value={this.state.attenuation_level} 
                    name="attenuation_level" 
                    onChange={this.handleInput}
                />
                 <label>Contributed By</label>
                <input 
                    type="text" 
                    value={this.state.contributed_by} 
                    name="contributed_by" 
                    onChange={this.handleInput}
                />


                <button>Add new</button>
            </form>
            </div>
        )
    }
}

export default NewBeer
