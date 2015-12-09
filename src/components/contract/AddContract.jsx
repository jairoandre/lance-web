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
      <label>Id: </label>
      <input ref="idInput" type="text" defaultValue="" placeholder="Digite o id"/>
      <label>Descrição: </label>
      <input ref="titleInput" type="text" defaultValue="" placeholder="Digite a descrição"/>
      &nbsp;
      <button onClick={ () => {
        let id = this.refs.idInput.value;
        let title = this.refs.titleInput.value;
        if(id && title){
          this.props.addContract({id: id, description: title});
        }
        this.refs.idInput.value = '';
        this.refs.titleInput.value = '';
      }}>Salvar</button>
      <a href="/#/contracts">Back</a>
      </div>
      );
  }
});
