var React = require('react');
var ReactDom = require('react-dom');

//properties associated with routes
var Router = require('react-router').Router;

var route = require(',/config/routes');

ReactDom.render(
	//create router and routes
	<Router>{routes}</Router>,
	//make sure it goes in the correct div
	document.getElementById('app');
)