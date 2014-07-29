module.exports.newArray = function(num1, num2, num3, num4) {
  var firstArray = [num1, num2, num3, num4];
  return firstArray;
};

module.exports.firstAndLast = function(array) {
  var secondArray = [array.shift(), array.pop();]
  return secondArray;
};