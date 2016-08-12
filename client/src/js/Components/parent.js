var React = require('react');
var Child1=require('./child1');
var Child2=require('./child2');
var Parent=React.createClass({
  getInitialState: function()
  {
    return({msg:'hello'});
  },
  getUpdatedState:function(las)
  {
    this.setState({msg:las});
  },
  render:function()
  {
    return(<div>
      <Child1 m={this.state.msg} />
      <Child2 submit={this.getUpdatedState} n={this.state.msg}/>
      </div>
    );

  }
});
module.exports =Parent;
