export function setState(state) {
  return {
    type: 'SET_STATE',
    state
  };
}

export function addContract(contract) {
  return {
    type: 'ADD_CONTRACT',
    contract
  };
}