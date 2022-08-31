function getRandArray(min, max) {
  var array = [...Array(max - min + 1).keys()];
  maxIndex = array.length - 1;
  while (maxIndex >= 0) {
    var randomNumber = Math.floor(Math.random() * maxIndex);
    var temp = array[maxIndex];
    array[maxIndex] = array[randomNumber];
    array[randomNumber] = temp;
    maxIndex--;
  }
  return array;
}

const result = getRandArray(0, 9);
module.exports = getRandArray;
