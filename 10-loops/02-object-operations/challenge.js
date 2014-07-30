module.exports.copy = function(object) {
  var monster = {};
  for (var property in object) {
    monster[property] = object[property];
  }
  return monster;
};

module.exports.extend = function(dest, src) {
  for (var property in src) {
    dest[property] = src[property];
  }
  return dest;
};

module.exports.hasElems = function(object, array) {

return !array.some(function(item){return !(item in object)})
    /*for (var i = 0; i < array.length; i++) {
        if (!(array[i] in object)) {return false;}

    }
    return true;
  */
};