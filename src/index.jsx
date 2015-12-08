import React from 'react';
import ReactDOM from 'react-dom';
import Router, { Route } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import App from './components/App';
import {ContractListContainer} from './components/contract/ContractList';
import AddContract from './components/contract/AddContract';

const store = createStore(reducer);

store.dispatch({
    type: 'SET_STATE',
    state: {
        contracts: [
            {
                id: 1,
                description: 'Contrato 1'
            },
            {
                id: 2,
                description: 'Contrato 2'
            }]
    }
});

const routes = <Route component={App}>
<Route path="/contracts" component={ContractListContainer}/>
<Route path="/contracts/add" component={AddContract}/>
</Route>

ReactDOM.render(
    <Provider store={store}>
  <Router>{routes}</Router>
  </Provider>
    ,
    document.getElementById('app')
);