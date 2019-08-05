let header = require('./layout/header.js')();
let footer = require('./layout/footer.js')();
module.exports = function(obj) {
  	return `
  		${header}
  		<br>
  		${obj.mess}
  		<br>
  		<div np-if="test" class="test">seen</div>
  		<np tag="style">
  			.test{
  				color:red;
  			}
  		</np>
  		<np tag="script">
  			console.log('scripting ...');
  			NP.data.if.test = true;
  		</np>
  		<br>
  		${footer}
  	`;
};