var mongoose = require('mongoose');
var Schema = mongoose.schema;

var ArticleSchema = new Schema({
	title:{
		type: String,
		trim: true,
		required: true
	},
	pub_date: {
		type: Date,
		trim: true,
		required: true
	},
	link:{
		type: String,
		required: true
	}
});

var Article = mongoose.model('Article', ArticleSchema);
module.exports= Article;