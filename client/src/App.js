import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import './scss/App.scss';
import './scss/Main.scss';
import Home from './components/Home';
import Startups from './components/Startups';
import Startup from './components/Startup';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


render() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Home}/> 
          <Route exact path="/startups/:name" component={Startup}/> 
        </Switch>
        {/* <Startups /> */}
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
