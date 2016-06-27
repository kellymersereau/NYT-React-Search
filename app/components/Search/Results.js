var React = require('react');
var Router = require('react-router');

var helpers = require('../../utils/helpers');

var Results = React.createClass({
	getInitialState: function(){
		return{

		}
	},
	handleClick: function(item, event){
		console.log("clicked");


	},
	render: function(){
		if(!this.props.results.hasOwnProperty('docs')){
			return (
				<li className="list-group-item">
					<h3>
						<span className="text-center"><em>Enter search terms to begin...</em></span>
					</h3>
				</li>
			)
		}
		else{
			return(
				<div className="main-container">
					<div className="row">
						<div className="panel panel-primary">
							<div className="panel-heading">
								<h1 className="panel-title"> <strong> <span class="glyphicon glyphicon-list-alt" aria-hidden="true"></span> Results </strong>
								</h1>
							</div>
							<div className="panel-body">
								<ul className="list-group">
									{articles}
								</ul>
							</div>
						</div>
					</div>
				</div>
			)
		}
	}
});

module.exports=Results;