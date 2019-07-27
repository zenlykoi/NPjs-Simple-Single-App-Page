var NP = require('./np.min.js');
var indexTpl = require('./components/index.js');
var homeTpl = require('./components/home.js');
var blogTpl = require('./components/blog.js');
var contactTpl = require('./components/contact.js');
NP.init('app');
NP.routes = [
	{
		path : '/',
		template : {
			title : 'Simple SPA Demo',
			html : indexTpl
		}
	},
	{
		path : '/home',
		template : {
			title : 'Home',
			html : homeTpl
		}
	},
	{
		path : '/blog',
		template : {
			title : 'Blog',
			html : blogTpl
		}
	},
	{
		path : '/contact',
		template : {
			title : 'Contact',
			html : contactTpl
		}
	}
];