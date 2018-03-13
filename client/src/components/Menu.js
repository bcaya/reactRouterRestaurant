import React from 'react';
import axios from 'axios';
import Form from './Form';
import Dashboard from './Dashboard';
import Foundation from 'react-foundation';
class Menu extends React.Component {
  state = { menu: {}, edit: false }

  componentDidMount() {
    const { match: { params:{ id } } } = this.props 
    axios.get(`/api/menu_items/${this.props.match.params.id}`)
      .then( res => this.setState({ menu: res.data }) )
  }

  toggleEdit = () => {
    this.setState( state => {
      return { edit: !this.state.edit }
    });
  }

  submit = (menu) => {
    axios.put( `/api/menu_items/${this.props.match.params.id}`, {menu })
    .then( res => this.setState( { menu: res.data, edit: false }))
  }

  show() {
    let { menu: { name, description, price }} = this.state; 
    return (
      <div>
        <h1>{name}</h1>
        <h3>{description}</h3>
        <h3>{price}</h3>
      </div>
    )
  }
  edit = () => {
    return <Form {...this.state.menu} submit={this.submit} />
  }

  render() {
    let { edit } = this.state;
    return (
      <div>
        { edit ? this.edit() : this.show() }
        <button className="button-basics-example" onClick={this.toggleEdit}>
        { edit ? 'Cancel' : 'Edit' } 
        </button>
      </div>
    )
  }
}

export default Menu;