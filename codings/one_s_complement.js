function oneComp(bit, str) {
  let int = parseInt(str, 10);
  let bin_str = Math.abs(int).toString(2);
  bit = parseInt(bit);
  
  if (bit < 0) {
    return "The number of allocated bits cannot be negative.";
  } else if (bin_str.length > bit) {
    return "The length of the number representation exceeds the number of bits allocated for it.";
  }
  
  let arr = bin_str.split("").map(Number);
  while (arr.length < bit - 1) {
    arr.unshift(0);
  }
  
  if (str[0] === "-") {
    arr = arr.map(num => num === 0 ? 1 : 0);
  }

  let res = arr.join('');
  return res;
}

module.exports = oneComp;
