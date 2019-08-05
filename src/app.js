window.NP = require('npjs');
var testComponent = require('./components/test.js')({ mess : 'Hello World' });
NP.init('app');
NP.routes = [
	{
		path : '/component-index',
		template : {
			title : 'Index Component',
			html : `
				<h1>Index</h1>
				<a href="/component-test">test component</a>
			`
		}
	},
	{
		path : '/component-test',
		template : {
			title : 'Test Component',
			html : testComponent
		}
	}
];