import React from 'react';
import {List} from 'immutable';

const contracts = List.of(
  {id: 1,description: "Contrato 1"},
  {id: 2,description: "Contrato 2"}
  );

export default React.createClass({
  render: function() {
    return React.cloneElement(this.props.children, {contracts: contracts});
  }
});
