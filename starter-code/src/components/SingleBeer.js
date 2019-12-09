import React, { Component } from 'react'
import Header from './Header'

export class SingleBeer extends Component {
    render() {

        const beerId  =  this.props.match.params.beerId

        const beer = this.props.beers.find(beer => beer._id === beerId ) || {}
       
        console.log(beerId);
        

        return (
            <div>
            <Header />
            <div className="one-beer container-fluid">
                <img className="single-beer-image" src={beer.image_url} alt="" />
                <div className="single-details-wrapper">
                    <div>
                        <h3>{beer.name}</h3>
                        <br/>
                        {beer.attenuation_level}
                        <br/>
                    </div>
                    <div>
                        <h5>{beer.tagline}</h5>
                        <br/>
                        <p>{beer.first_brewed}</p>
                        <br/>
                    </div>
                    {beer.description}
                    <br/>
                    {beer.contributed_by}
                </div>
            </div>
            </div>
        )
    }
}

export default SingleBeer
