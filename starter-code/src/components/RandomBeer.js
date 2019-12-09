import React, { Component } from 'react'
import Header from  './Header'

export class randomBeer extends Component {
    render() {
        return (
            <div>
             <Header/>
                <div className="single-beer container-fluid">
                                <img className="random-image" src={this.props.randomBeer.image_url} alt="" />
                                <br/>
                                <div className="details-wrapper">
                                {this.props.randomBeer.name}
                                <br/>
                                {this.props.randomBeer.tagline}
                                <br/>
                                {this.props.first_brewed}
                                <br/>
                                {this.props.attenuation_level}                    
                                <br/>
                                {this.props.description}                                   
                                <br/>
                                {this.props.randomBeer.contributed_by}
                                </div>
                                </div>
            </div>
        )
    }
}

export default randomBeer
