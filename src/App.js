import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import Navbar from './components/Layout/Navbar';
import MovieApp from './components/Pages/MovieApp';
import MovieDetails from './components/Pages/MovieDetails';
import About from './components/Pages/About';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <div className='container'>
          <Switch>
            <Route exact path='/' component={MovieApp} />
            <Route exact path='/about' component={About} />
            <Route exact path='/:id' component={MovieDetails} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
