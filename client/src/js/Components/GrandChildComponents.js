var React=require('react');
var GrandChildComponent1=require('./GrandChildComponents1.js');
var GrandChildComponent=React.createClass({
  render: function ()
  {
    return(
        <div>
          <h1>I am grand child component</h1><GrandChildComponent1/>
      </div>)
  }
})


module.exports=GrandChildComponent
