var React=require('react');
var {Link}=require('react-router');
var Index=React.createClass(
{
  render:function()
  {
    return(<div ClassName="row">
    <div ClassName="col-lg-4 col-md-4 col-sm-4 navbar">
      <ul>
      <li>
      <Link to="/About" activeClass="active">About Us</Link>

      </li>

      <li>
        <Link to="/ContactUs" activeClass="active">ContactUs</Link>
      </li>
      </ul>
      </div>
      <div className="col-lg-8 col-md-8 col-sm-8">
      {this.props.children}
      </div>
      </div>)
  }
});
module.exports=Index
