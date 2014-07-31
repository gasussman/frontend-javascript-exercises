module.exports.sumNumbers = function(array) {
  var sum = 0; 
  for(var i = 0; i < array.length; i++) {
    sum += array[i];
  };
  return sum;
};

module.exports.splitAndLowerCaseString = function (inputString) {
  var cutUp = inputString.split(",");
  var mashUp = [];
  for (var i = 0; i < cutUp.length; i++) {
    mashUp.push(cutUp[i].toLowerCase());
  }
  return mashUp;

};

module.exports.addIndex = function (array) {
  var oneUp = [];
  for (var i = 0; i < array.length; i++) {
    oneUp.push(i + " is " + array[i]);
  }
  return oneUp;
};
