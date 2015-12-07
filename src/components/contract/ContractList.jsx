import React from 'react';
import Contract from './Contract';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
    mixins: [PureRenderMixin],
    getContracts: function() {
        return this.props.contracts || [];
    },
    render: function() {
        return (
            <div className="contracts">

          {this.getContracts().map(entry => <Contract key={entry.id} contract={entry}/>
            )}

              </div>);
    }

});