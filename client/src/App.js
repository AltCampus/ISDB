import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import './scss/App.scss';
import Dashboard from './components/Dashboard';
import About from './components/About';
import Contact from './components/Contact';
import Startup from './components/Startups';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <Startup />
          {/* <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={Contact} />
          </Switch> */}
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
