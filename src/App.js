import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import {Provider} from 'react-redux';
import store from './store';
import NewEventContainer from './components/newevent/Newevent-container';

const App = ()=>(
  <Provider store={store}>
    <Router>
      <Route path="/" component={NewEventContainer}/>
    </Router>
  </Provider>
)

export default App;
