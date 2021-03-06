import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import './person-details.css';


export default class PersonDetails extends Component {

  service = new SwapiService();

  state = {
    person: null,
  };

  updatePerson() {
    const { personId } = this.props;

    if(!personId) {
      return;
    }

    this.service.getPerson(personId)
      .then(person => this.setState({
        person: person
      }))
  }

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.props.personId !== prevProps.personId) {
      this.updatePerson();
    }
  }

  render() {

    if(!this.state.person) {
      return <span>Selecta person from list</span>
    }

    const { id, name, gender, birthYear, eyeColor } = this.state.person;

    return (
      <div className="person-details card">
        <img className="person-image" alt='#'
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
