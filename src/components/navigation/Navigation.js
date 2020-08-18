import React from 'react';
import { Link, Route, Switch, useParams } from 'react-router-dom';

function Navigation(props) {
    return (
        <div className="Navigation">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/clock">Clock</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <Switch>
                <Route path="/welcome/:name" children={<Child />} />
            </Switch>
        </div>
    );
}

export default Navigation;

function Child() {
    let { name } = useParams();
  
    return (
      <div>
        <p>Welcome, {name}!</p>
      </div>
    );
  }