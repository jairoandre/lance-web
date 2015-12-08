import React from 'react';
import {connect} from 'react-redux';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export const Contract = React.createClass({
    mixins: [PureRenderMixin],
    getContract: function() {
        return this.props.contract || {};
    },
    render: function() {
        return (
            <div className="contract">
              <h1>{this.getContract().id}</h1>
              <p>{this.getContract().description}</p>
            </div>
        );

    }

});

function mapStateToProps(state) {
  return {
    id: state.get('id'),
    description: state.get('description')
  };
}

export const ContractContainer = connect(mapStateToProps)(Contract);