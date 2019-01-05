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

import Company from "./components/CompanyPage/Company";
import "./scss/company.scss";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
   return (
      <BrowserRouter>
        <div>
          <Header />
        <Switch>
          <Route path="/" exact render={  
            () => (
              <div>
                <HeroIndex />
              </div>
            )
          } />
          <Route exact path="/startups/:name" component={Company}/>
          <Route path="/login" component={AdminLogin} />
          <Route path="/admin" component={AdminHome}/>
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}



