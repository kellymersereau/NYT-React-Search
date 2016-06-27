var React = require('react');
var Router = require('react-router');

var Query = require('./Search/Query');
var Results = require('./Search/Results');

var helpers = require('../utils/helpers');

var Search = React.createClass({
	getInitialState: function(){
		return {
			term: "",
			start: "",
			end: "",
			results: {}
		}
	},
	componentDidUpdate: function(prevProps, prevState){
		console.log("COMPONENT UPDATED");
		console.log(this.state.term);
		console.log(this.state.start);
		console.log(this.state.end);

		console.log("Previous State ", prevState);
	},
	setQuery: function(newQuery, newStart, newEnd){
		this.setState({
			term: newQuery,
			start: newStart,
			end: newEnd
		})
	},

	render: function(){
		return(
			<div className="main-container">
				<Query updateSearch={this.setQuery} />

				<Results results={this.state.results} />
			</div>
		)
	}

});

module.exports = Search;