import React, { Component } from 'react';
import Header from './components/Header';
import './App.scss';
import Cards from './Cards';

class App extends Component {

  render() {
    return <main>
      <Header/>
      <Cards {...this.props} />
    </main>
  }
}

export default App;