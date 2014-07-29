module.exports.addItem = function(item, array) {
if (array.indexOf(item) >= 0) {
  return array;
  }

else {
  array.push(item);
  return array;
}

};

module.exports.reverseSortedList = function(array) {
  var secondArray = array.sort();
  secondArray.reverse();
  return secondArray;
};