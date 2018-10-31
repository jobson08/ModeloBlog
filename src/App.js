import React, { Component } from 'react';

import { BrowserRouter, Route } from 'react-router-dom'

import NavBar from './Components/NavBar'
import Footer from './Components/Footer'


import Home from './Screens/Home'
import Noticias from './Screens/Noticias'
import Perfil from './Screens/Perfil'
import Leitor from './Screens/Leitor'
import Opiniao from './Screens/Opiniao'
import Preco from './Screens/Preco'
import Equipe from './Screens/Equipe'
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
      <Route path='/Noticias' component={Noticias} />
      <Route path='/Perfil' component={Perfil} />
      <Route path='/Leitor' component={Leitor} />
      <Route path='/Opiniao' component={Opiniao} />
      <Route path='/Equipe' component={Equipe} />
      <Route path='/Contato' component={Contato} />
       <Footer />
      </div>
       </BrowserRouter>
    );
  }
}

export default App;
