let header = require('./header.js')();
module.exports = function(obj) {
  	return `
  		${header}
  		${obj.mess}
  		{{test}}
  		<div np-if="test">seen</div>
  		<np tag="script">
  			NP.data.if.test = true;
  		</np>
  	`;
};