import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
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