import React, { Component } from 'react';
import {  Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Beers from './components/Beers'
import RandomBeer from './components/RandomBeer'
import NewBeers from './components/NewBeers'
import Home from './components/Home'
import SingleBeer from './components/SingleBeer'
import axios from 'axios'


class App extends Component {

  state = {
    beers: [],
    randomBeer: []
  }

  componentDidMount() {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers`)
    .then(res => {
            const beers = res.data;
            this.setState({beers})
            console.log(res.data)
        })  

        axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
        .then(res => {
                const randomBeer = res.data;
                this.setState({randomBeer})
                console.log(res.data)
            }) 
    }
  render() {

    const beers = this.state.beers;
    const randomBeer = this.state.randomBeer;

    return (
      <div className="App">
        <div>
      <Switch>
        <Route exact path="/" render={props => ( <Home {...props}  /> )}/>
        <Route exact path="/beers" render={props => ( <Beers {...props} beers={beers}  /> )}/>
        <Route exact path="/new-beers" render={props => ( <NewBeers {...props}  /> )}/>
        <Route exact path="/random-beer" render={props => ( <RandomBeer {...props} randomBeer={randomBeer} /> )}/>
        <Route exact path="/:beerId" render={props => ( <SingleBeer {...props} beers={beers} /> )}/>
        </Switch>
      
        </div>
      
      </div>
    );
  }
}

export default App;
