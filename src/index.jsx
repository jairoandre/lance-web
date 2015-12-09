import React from 'react';
import ReactDOM from 'react-dom';
import Router, { Route } from 'react-router';
import {setState} from './action_creators';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import App from './components/App';
import {ContractListContainer} from './components/contract/ContractList';

const store = createStore(reducer);

// Set app initial state
store.dispatch(setState({contracts: []}));

const routes = <Route component={App}>
<Route path="/contracts" component={ContractListContainer}/>
</Route>

ReactDOM.render(
  <Provider store={store}>
  <Router>{routes}</Router>
  </Provider>
  ,
  document.getElementById('app')
  );