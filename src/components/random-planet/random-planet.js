import React, { Component } from 'react';

import './random-planet.css';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator'


export default class RandomPlanet extends Component {

  constructor() {
    super();
    this.updatePlanet();
    setInterval(this.updatePlanet, 6000)
  }

  service = new SwapiService();

  state = {
    planet: {},
    loading: true,
  };

  onPlanetLoader = (planet) => {
    this.setState({ planet, loading: false})
  };

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 25) + 2;
    this.service
      .getPlanet(id)
      .then(this.onPlanetLoader)
      .catch((err) => {
        <ErrorIndicator />
      });

  }

  render() {
    const { 
      planet: { 
        id, name, population, rotationPeriod, diameter
      },
      loading,
    } = this.state;

    if(loading) {
      return <Spinner />
    }

    return (
      <div className="random-planet jumbotron rounded">
        <img className="planet-image" alt='#'
             src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
        <div>
          <h4>{ name }</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{ population }</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{ rotationPeriod }</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{ diameter }</span>
            </li>
          </ul>
        </div>
      </div>

    );
  }
}
