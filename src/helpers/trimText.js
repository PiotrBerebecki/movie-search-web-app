export default (txt, count) => {
  return txt ? `${txt.slice(0, count)}...` : '';
};
