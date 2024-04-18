const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };
const mapObject = require('../mapObject.js');

 

const result = mapObject(testObject, value => value.toUpperCase());
console.log("Mapped Object:", result);

