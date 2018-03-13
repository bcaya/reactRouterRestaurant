import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import Form from './Form';
import { isAuthenticated } from '../fakeAuth';
import axios from 'axios';
import Foundation from 'react-foundation';


class Dashboard extends React.Component {
state = { menu_items: [], showForm: false }
  componentDidMount() {
    axios.get('/api/menu_items')
      .then( res => this.setState({ menu_items: res.data }) )
  }

  show = () => {
    const { menu_items } = this.state;
      return (
        <ul>
          { menu_items.map( p =>
              <li key={p.id}>
                <Link to={`/menu_items/${p.id}`}>{p.name}</Link>
              </li>
            )
          }
        </ul>
      )
  }
  form = () => {
    return <Form submit={this.submit} />
  }
  submit = (menu) => { 
    let {menu_items} = this.state
    axios.post(`/api/menu_items`, { menu } ) 
      .then( res => this.setState({ menu_items: [res.data, ...menu_items ], showForm: false }))
      .catch( e => console.log(e.response.data.errors))
  }

  toggleForm = () => { 
    this.setState( state => {
      return { showForm: !state.showForm }
    })
  }

  render() {
    let { showForm } = this.state; 
      return (
        <div>
          <h2>Menu Items</h2>
          <button  className="button-basics-example" onClick={this.toggleForm}>
          {showForm ? 'Hide' : 'Show' }
          </button>
          { showForm ? this.form() : this.show() }
        </div>
      )
  }

}

export default Dashboard;