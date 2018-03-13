import React from 'react';
import { login } from '../fakeAuth';

const Login = ({ history }) => (
  <div>
    <h3>Login</h3>
    <button className="button-basics-example" onClick={ () => {
      login() 
      history.push('/dashboard')
    }}>
      Login dude 
    </button>
  </div>
)

export default Login; 