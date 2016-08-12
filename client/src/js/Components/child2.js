var React = require('react');
var Child2=React.createClass({

handleState:function(){
  this.props.submit('hai');
},
  render:function()
  {
    return(<div>
<a onClick={this.handleState} className="btn btn-primary">compose</a>
      </div>);
  }
});
module.exports=Child2;
