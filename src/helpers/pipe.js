/**
 * Pipes two functions from left to right.
 * @param  {function} fn1 function to be executed first
 * @param  {function} fn2 fuction to be executed second
 * @return {function}     arguments to be piped
 */
const _pipe = (fn1, fn2) => (...args) => fn2(fn1(...args));

export default (...fns) => fns.reduce(_pipe);
