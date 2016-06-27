//sets up the routes for the rest of the app, utilizes react-router to do this

var React = require('react');
var ReactDOM = require('react-dom');

//properties associated with routes
var Router = require('react-router').Router;

var routes = require('./config/routes');

ReactDOM.render(

	<Router routes={routes} />,
	document.getElementById('app')
)