import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Components/Main';
import Home from './Components/Home';
import Success from './Components/Success';
import Failure from './Components/Failure';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './css/main.scss';
import { Provider } from 'react-redux';
import store from './store';
import axios from 'axios';


axios.defaults.baseUrl = 'http://localhost:4000/users';


const App = () => {
  return (
    <Provider store={store}>
    <div className="App">
      <Router>
        <Home />
        <Switch>
            <Route path="/success" component={Success} />
            <Route path="/failure" component={Failure} />
            <Route path="/" component={Main} />
        </Switch>
        <Footer />
      </Router>
    </div>
    </Provider>
  );
}

export default App;
