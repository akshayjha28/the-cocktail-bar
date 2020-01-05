import React, { Component } from 'react';
import Header from './components/Header';
import Cards from './components/Cards';

class App extends Component {

  render() {
    return <main>
      <Header/>
      <Cards {...this.props} />
    </main>
  }
}

export default App;