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

  // <BrowserRouter>
  // <div className="App">
  // <Startup /><BrowserRouter>
  // <div className="App">
  // <Startup />
  //   {/* <Switch>
  //     <Route exact path='/' component={Dashboard} />
  //     <Route exact path='/about' component={About} />
  //     <Route exact path='/contact' component={Contact} />
  //   </Switch> */}
    
// </div>
// <BrowserRouter />
//     {/* <Switch>
//       <Route exact path='/' component={Dashboard} />
//       <Route exact path='/about' component={About} />
//       <Route exact path='/contact' component={Contact} />
//     </Switch> */}
    
// </div>
// <BrowserRouter />


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
