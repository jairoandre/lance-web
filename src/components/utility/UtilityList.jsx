import React from 'react';
import Utility from './Utility';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  mixins: [PureRenderMixin],
  getUtilities: function() {
    return this.props.utilities || [];
  },
  render: function() {
    return <div className="utilities">
    {this.getUtilities().map(entry => 
      <Utility key={entry.id} utility={entry}/>
      )}
    </div>
  }

});