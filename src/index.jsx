import React from 'react';
import ReactDOM from 'react-dom';
import Router, {Route} from 'react-router';
import App from './components/App';
import ContractList from './components/contract/ContractList';
import AddContract from './components/contract/AddContract';


const routes = <Route component={App}>
<Route path="/" component={ContractList}/>
<Route path="/contracts" component={ContractList}/>
<Route path="/contracts/add" component={AddContract}/>
</Route>

ReactDOM.render(
    <Router>{routes}</Router>,
    document.getElementById('app')
);