module.exports.favoriteNumber = function(favNum, guessNum) {
  if (guessNum > favNum) {
    return "Too high";
  }
  else if (guessNum == favNum) {
    return "You got it!";
  }
  else {
    return "Too low";
  }
};

module.exports.checkLock = function(num1, num2, num3, num4) {
  if ((num1 == 3 || num1 == 5 || num1 == 7) && (num2 == 2) && ((num3 >=5) && (num3 <= 100)) && ((num4 < 9) || (num4 > 20))) {
    return true;
  }
  else {
    return false;
  }
};

module.exports.canIGet = function(item, money) {
  if (((item == 'MacBook Air') && (money >= 999)) || ((item == 'MacBook Pro') && (money >= 1299)) || ((item == 'Mac Pro') && (money >= 2499)) || ((item == 'Apple Sticker') && (money >= 1))){
    return true;
  }
  else {
    return false;
  }

};