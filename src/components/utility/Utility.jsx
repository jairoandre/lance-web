import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  mixins: [PureRenderMixin],
  getUtility: function() {
    return this.props.utility || {};
  },
  render: function() {
    return <div className="utility">
    <h1>{this.getUtility().id}</h1>
    <p>{this.getUtility().description}</p>
    </div>
  }

});