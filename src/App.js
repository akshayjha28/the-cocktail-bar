import React, { Component } from 'react';
import Header from './components/Header';
import Cards from './components/Cards';
import Footer from './components/Footer';

class App extends Component {

  render() {
    return <main>
      <Header/>
      <Cards {...this.props} />
      <Footer/>
    </main>
  }
}

export default App;