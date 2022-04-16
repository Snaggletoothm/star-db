import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './app.css';
import SwapiService from '../../services/swapi-service';

class App extends Component {

  service = new SwapiService();
  
  state = {
    selectedPerson: 5,
  };

  onPersonSelected = (id) => { 
    this.setState({
      selectedPerson: id
    });
  };

  render() {
    return (
      <div>
        <Header />
        <RandomPlanet />
  
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList 
              onPersonSelected={this.onPersonSelected} 
              getData={this.service.getAllPeople}
            />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;