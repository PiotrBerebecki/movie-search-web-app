/**
 * Shortens long text.
 * @param  {string} txt  Text to be shortened
 * @param  {number} from Start index
 * @param  {number} to   End index
 * @return {string}      Shortened text
 */
export default (txt, from, to) => {
  let indexToFinish = to;
  if (txt[indexToFinish] !== undefined) {
    while (!/\s/.test(txt[indexToFinish]) && txt[indexToFinish] !== undefined) {
      indexToFinish += 1;
    }
  }
  return txt && `${txt.slice(from, indexToFinish)}`;
};
