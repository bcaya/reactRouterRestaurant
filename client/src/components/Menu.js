import React from 'react';
import axios from 'axios';

class Menu extends React.Component {
  state = { menu: {} }

  componentDidMount() {
    axios.get(`/api/menu_items/${this.props.match.params.id}`)
      .then( res => this.setState({ menu: res.data }) )
  }

  render() {
    let { menu: { name, description, price, department }} = this.state;
    return (
      <div>
        <h1>{name}</h1>
        <h3>{description}</h3>
        <h3>${price}</h3>
        <h3>{department}</h3>
      </div>
    )
  }
}

export default Menu;