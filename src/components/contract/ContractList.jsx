import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import {Contract} from './Contract';


export const ContractList = React.createClass({
  mixins: [PureRenderMixin],
  getContracts: function() {
    return this.props.contracts || [{id: 1, description: 'teste'}];
  },
  render: function() {
    return <div className="contracts">

        {this.getContracts().map(entry => 
            <Contract key={entry.id} contract={entry}/>
          )
        }

      <a href="/#/contracts/add">Add</a>

      </div>;
  }

});

function mapStateToProps(state) {
  return {
    contracts: state.get('contracts').toJS()
  };
}

export const ContractListContainer = connect(mapStateToProps)(ContractList);