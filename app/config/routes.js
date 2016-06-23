//config/routes

//include react and the router
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

//include the index route to catch all - a dynamic index that is the default route incase no other routes are hit
var IndexRoute = Router.IndexRoute;

//reference the components - you don't need the file extension because jsx automatically renders it
var Main = require('../components/Main');
var Saved = require('../components/Saved');
var Search = require('../components/Search.js');

//export the routes
module.exports = (
	<Route path="/" component={Main}>
{/*if the user selects search or save, show the appropriate component */}
		<Route path="Search" component={Search} />
		<Route path="Saved" component={Search} />
{/*if the user selects any other path .. it takes them home */}
		<IndexRoute component={Search} />
	</Route>
)