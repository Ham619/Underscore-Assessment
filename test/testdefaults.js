const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };
const defaultProps = { age: 36, vehicle: 'Batmobile' };
const { defaults } = require('../defaults.js');

 

const result = defaults(testObject,defaultProps);
console.log(result); 