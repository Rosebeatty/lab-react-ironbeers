import React, { Component } from 'react'
import Header from './Header'
import {  Switch, Route, Link } from 'react-router-dom';

class Beers extends Component {
    render() {
       console.log(this.props.beers)
      
    
        return (
            <div>
             <Header />
                <div>
                {
                    this.props.beers.map(beer => {
                        console.log(beer._id)
                        return(    
                                <Link key={beer._id} to={"/" + beer._id}>
                                <div className="single-beer container-fluid">
                                    <div className="image-wrapper">
                                    <img className="beer-image" src={beer.image_url} alt="" />
                                </div>
                                    <div className="details-wrapper">
                                    <br/>
                                    <h2>{beer.name}</h2>
                                    <br/>
                                    <h3>{beer.tagline} </h3>  
                                    <br/>
                                    <p>{beer.contributed_by}</p>
                                    </div>
                                </div>
                            </Link>
                           
                        )
                    })
                }
                    
                </div>
            </div>
        )
    }
}

export default Beers
