import React, { Component } from 'react';

import { BrowserRouter, Route } from 'react-router-dom'

import NavBar from './Components/NavBar'
import Footer from './Components/Footer'


import Home from './Screens/Home'
import Preco from './Screens/Preco'
import Contato from './Screens/Contato'
class App extends Component {
  render() {
    return (

    /* <div>
        <NavBar />
        <Home />
        <Contato />
        <Footer />
      </div>*/
    <BrowserRouter>
      <div className="App">
      <NavBar />
      <Route path='/' exact component={Home} />
      <Route path='/Contato' component={Contato} />
       <Footer />
      </div>
       </BrowserRouter>
    );
  }
}

export default App;
