import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ViewBlockchains from './containers/blockchain/ViewBlockchains';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path = "/" component  = {ViewBlockchains} />
        </Switch>
    </Router>
  );
}

export default App;
