import React, { Component } from 'react';
import Spinner from '../spinner';
import './item-list.css';


export default class ItemList extends Component {

  state = {
    itemList: null,
  };

  componentDidMount() {
    const { getData } = this.props;
    
    getData()
      .then(itemList => {
        this.setState({
          itemList: itemList,
        });
      });
  }

  renderItem(listItem) {
    return listItem.map(({ id, name }) => {
      return (
        <li className="list-group-item" key={ id }
          onClick={() => this.props.onPersonSelected(id)}>
          { name }
        </li>
      );
    })
  };

  render() {
    const { itemList } = this.state;

    if(!itemList) {
      return <Spinner />
    }

    const items = this.renderItem(itemList); 
    return (
      <ul className="item-list list-group">
        {items}        
      </ul>
    );
  }
}
