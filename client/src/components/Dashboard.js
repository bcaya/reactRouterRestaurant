import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { isAuthenticated } from '../fakeAuth';
import axios from 'axios';


class Dashboard extends React.Component {
  state = { menu_items: [] }

  componentDidMount() {
    axios.get('/api/menu_items')
      .then( res => this.setState({ menu_items: res.data }) )
  }

  render() {
    let { menu_items } = this.state;
    if (isAuthenticated()) {
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
    } else {
      return <Redirect to="/login" />
    }
  }
}

export default Dashboard;