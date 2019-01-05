import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import './scss/App.scss';
import './scss/Main.scss';
import './scss/admin.scss';
import Dashboard from './components/Dashboard';
import About from './components/About';
import Contact from './components/Contact';
import Startup from './components/Startups';

import Header from './components/Header';
import HeroIndex from './components/HeroIndex';
import Footer from './components/Footer';
import AdminLogin from './components/admin-components/AdminLogin';
import AdminHome from './components/admin-components/AdminHome';

import Company from "./components/CompanyPage/Company";
import "./scss/company.scss";

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
      {/* <div> */}
      <div>
        
          <Route path="/product" render = {
            () => (
              <div>
                <Header/>
                <Company/>
                <Footer/>
              </div>
            )
          }/> 
          <Route path="/" exact render={  
            () => (
              <div>
                <Header />
                <HeroIndex />
                <Footer />
              </div>
            )
          } />
          <Route path="/login" component={AdminLogin} />
          <Route path="/admin" component={AdminHome}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

