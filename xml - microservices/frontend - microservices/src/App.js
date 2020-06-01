import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Registration from './Registration/Registration';
import Login from './Login/Login';
import HomePage from './HomePage/HomePage';

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/registration" exact component={Registration} />
            <Route path="/login" exact component={Login} />
         </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;