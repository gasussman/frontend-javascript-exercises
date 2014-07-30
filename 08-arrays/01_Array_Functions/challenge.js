module.exports.reversePlusOne = function(array) {
var secondArray = array.reverse();
secondArray.unshift(1);
return secondArray;
};

module.exports.plusesEverywhere = function(array) { 
  return array.join("+");
};

module.exports.arrayQuantityPlusOne = function(array) {
  return array.length + 1;
};