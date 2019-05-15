module.exports = function l1Norm (vector) {
  if (!Array.isArray(vector)) {
    throw new Error('`vector` is expected to be an array.');
  }

  return vector.reduce(function computeL1Norm(acc, element) {
    return acc + Math.abs(element);
  }, 0);
};
