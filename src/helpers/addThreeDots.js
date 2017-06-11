/**
 * Adds the first parameter to the back.
 * @param  {string}   a string to be added to the back
 * @return {function}   function accepting a string to be put at the front
 */
const add = a => b => b + a;

export default add('...');
