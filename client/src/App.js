import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import OtherPage from './otherPage'
import Fib from './Fib'

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>Edit <code>src/App.js</code> and save to reload.</p>
              <Link to="/">Home</Link>
              <Link to="/otherpage">Other Page</Link>
            </header>
            <Route exact path="/" component={Fib} />
            <Route path="/otherpage" component={OtherPage} />
          </div>
        </Router>
    );
  }
}

export default App;
