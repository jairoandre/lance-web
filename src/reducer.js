import {Map, fromJS, List} from 'immutable';


function setState(state, newState){
  return state.merge(newState);
}

function addContract(state, contract){
  let currentContracts = state.get("contracts");
  if(!currentContracts){
    currentContracts = List();
  }
  currentContracts.push(fromJS(contract));
  return state.set("contracts",currentContracts.push(fromJS(contract)));
}

export default function(state = Map(), action) {
  switch (action.type) {
    case 'SET_STATE':
    return setState(state, action.state);
    case 'ADD_CONTRACT':
    return addContract(state, action.contract);
    default:
    return state;
  }
}