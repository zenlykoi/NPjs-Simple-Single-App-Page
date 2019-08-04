window.NP = require('./np.min.js');
var testComponent = require('./components/test.js')({ mess : 'hih' });
NP.init('app');
NP.data = {
	test : 'hello world haha',
	if : {
		seen : false
	}
};
NP.routes = [
	{
		path : '/',
		template : {
			title : 'Simple SPA Demo',
			html : `
				<a href="/test">test</a>
			`
		}
	},
	{
		path : '/test',
		template : {
			title : 'Test Components',
			html : testComponent
		}
	}
];