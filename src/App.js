import React, {Component} from 'react';
import Header from './components/Header/header'
import Navigation from './components/Header/navigation'

class App extends Component {
  render(){
    return (
      <div>
        <Header />
        <Navigation />
        <h1>Hello it worked!</h1>
      </div>
    )
  }
}

export default App;
