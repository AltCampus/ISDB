import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import './scss/App.scss';
import './scss/Main.scss';
import Dashboard from './components/Dashboard';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import HeroIndex from './components/HeroIndex';
import Footer from './components/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
      <Header/>
      <HeroIndex/>
      <Footer/>
      </div>
    );
  }
}

export default App;

