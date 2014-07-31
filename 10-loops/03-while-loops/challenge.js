module.exports.stream = function(conditionalFn, actionFn) {
  while (conditionalFn()) {
    actionFn();
  }
};


module.exports.sumNumbers = function(array) {
  if(array.length === 0) {return 0;}

  var i = 0;
  var result = 0;
  while (i < array.length) {
    result += array[i];
    i++;
  }
  return result;
};

