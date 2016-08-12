var React=require('react');
var {render}=require('react-dom');
var {Router,Route,browserHistory}=require('react-router');
var About=require('./Components/About');
var ContactUs=require('./Components/ContactUs');
var App=require('./Components/Index');


render((<Router history={browserHistory}>
  <Route path="/" component={App}>
  <Route path="/About" component={About}/>
  <Route path="/ContactUS" component={ContactUs}/>
  </Route>
    </Router>),document.getElementById('app'));
