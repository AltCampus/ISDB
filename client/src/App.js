import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import './scss/App.scss';
import './scss/Main.scss';
import './scss/admin.scss';
import "./scss/company.scss";
import Startup from './components/Startups';
import Header from './components/Header';
import HeroIndex from './components/HeroIndex';
import Footer from './components/Footer';
import AdminLogin from './components/admin-components/AdminLogin';
import AdminHome from './components/admin-components/AdminHome';
import AdminEdit from './components/admin-components/AdminEdit';
import Company from "./components/CompanyPage/Company";


export default class App extends Component {
  render() {
   return (
      <BrowserRouter>
        <div>
          <Header />
        <Switch>
          <Route path="/" exact component={HeroIndex} />
          <Route exact path="/startups/:name" component={Company}/>
          <Route path="/login" component={AdminLogin} />
          <Route path="/admin" component={AdminHome}/>
          <Route exact path="/admin/startups/:id/edit" component={AdminEdit}/>
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}



