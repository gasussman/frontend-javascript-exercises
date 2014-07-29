module.exports.createCourse = function(courseTitle, courseDuration, courseStudents) {
  var course = {
    title: courseTitle,
    duration: courseDuration,
    students: courseStudents
  };
  return course;
};

module.exports.addProperty = function(object, newProp, newValue) {
  object[newProp] = newValue;
  return object;
};

module.exports.formLetter = function(newProps) {
  var message = newProps;
  var messageTogether = "Hello " + message.recipient + ",\n\n" + message.msg + "\n\nSincerely,\n" + message.sender;
  return messageTogether;
};

module.exports.canIGet = function(item, money) {
  var price = {
    "MacBook Air": 999,
    'MacBook Pro': 1299,
    'Mac Pro': 2499,
    'Apple Sticker': 1
  };
  var myPrice = price[item];
  return money >= myPrice;
};