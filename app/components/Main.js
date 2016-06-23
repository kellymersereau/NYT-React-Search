//this is the main app component.. sets up the header and static content

//include react & react-router
var React = require('react');
var Router = require('react-router');

//create the main component - createClass is a function within React so you need React before createClass
var Main = React.createClass(
	//every component has to have a render function
	{
		render: function(){
			return (
				<div className="main-container">
					<nav className="navbar navbar-default navbar-static-top" role="navigation">
						<div className="container">
							<div className="navbar-header">
								<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
								  <span class="sr-only">Toggle navigation</span>
								  <span class="icon-bar"></span>
								  <span class="icon-bar"></span>
								  <span class="icon-bar"></span>
								</button>
								<a className="navbar-brand" href="#">NYT React Search! </a>
							</div>
							<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
								<ul class="nav navbar-nav navbar-right">
								  <li><a href="#">Link</a></li>
								  <li><a href="#">Link</a></li>
								</ul>
							</div>
						</div>
					</nav>
					<div className="container">
						{this.props.children}
					</div>
				</div>
			)
		}
	}
)

module.exports = Main;
