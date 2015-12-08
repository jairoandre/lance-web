import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  mixins: [PureRenderMixin],
  getContracts: function() {
    return this.props.contracts || [];
  },
  render: function() {
    return (
      <div className="addContract">
        <h1>Novo Contrato</h1>
        <label>Descrição: </label>
        <input type="text" defaultValue="" placeholder="Digite a descrição"/>
        &nbsp;
        <button onClick={() => this.props.add(this.getContracts())}>Salvar</button>
        <a href="/#/contracts">Back</a>
      </div>
      );
  }
});
