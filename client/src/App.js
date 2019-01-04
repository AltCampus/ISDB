import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import './scss/App.scss';
import './scss/Main.scss';
import './scss/admin.scss';
import Dashboard from './components/Dashboard';
// // import About from './components/About';
// import Contact from './components/Contact';
import Startup from './components/Startups';

import Header from './components/Header';
import HeroIndex from './components/HeroIndex';
import Footer from './components/Footer';
import AdminLogin from './components/admin-components/AdminLogin';
import AdminHome from './components/admin-components/AdminHome';
import AdminEdit from './components/admin-components/AdminEdit';

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
          <Route path="/" exact render={  
            () => (
              <div>
                <Header />
                <HeroIndex />
                <Footer />
              </div>
            )
          } />
          {/* <Route exact path="/startups/:name" component={Startup}/>  */}
          <Route exact path="/login" component={AdminLogin} />
          <Route exact path="/admin" component={AdminHome}/>
          <Route exact path="/admin/startups/:id/edit" component={AdminEdit}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
