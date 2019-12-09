import React, { Component } from 'react'
import {  Switch, Route, Link } from 'react-router-dom';
// import Header from '.components/Header'
// import randomBeers from '.components/randomBeers'
// import newBeers from '.components/newBeers'
// import Beers from '.components/Beers'

class Home extends Component {
    render() {
        return (
            <div>
                <Link  to="/beers">All Beers</Link>
                <Link  to="/new-beers">New Beers</Link>
                <Link to="/random-beer">Random Beers</Link>
            </div>
        )
    }
}

export default Home
