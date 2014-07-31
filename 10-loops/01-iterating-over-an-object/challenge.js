module.exports.getKeys = function (object) {
  var ignition = [];
  for (var property in object) {
    ignition.push(property);
  }
  return ignition;
};

module.exports.getValues = function (object) {
  var sailBoat = [];
  for (var property in object) {
    sailBoat.push(object[property]);
  };
  
  return sailBoat;
};

module.exports.objectToArray = function (object) {
  var machete = [];
  for (var property in object) {
    machete.push(property + " is " + object[property]);
  }
  return machete;
};