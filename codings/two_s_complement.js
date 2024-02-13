function twoComp(bit, str) {
  let int = parseInt(str, 10);
  let bin_str = Math.abs(int).toString(2);
  bit = parseInt(bit);

  let maxValue = Math.pow(2, bit - 1) - 1;
  let minValue = -Math.pow(2, bit - 1);
  
  if (bit < 0) {
    return "The number of allocated bits cannot be negative.";
  } else if (int < minValue || int > maxValue) {
    return "The length of the number representation exceeds the number of bits allocated for it.";
  }

  let arr = bin_str.split("").map(Number);
  while (arr.length < bit) {
    arr.unshift(0);
  }

  if (int < 0) {
    arr = arr.map(num => num === 0 ? 1 : 0);
    let carry = 1;
    for (let i = arr.length - 1; i >= 0; i--) {
      let sum = arr[i] + carry;
      arr[i] = sum % 2;
      carry = Math.floor(sum / 2);
      if (carry === 0) {
        break;
      }
    }
  }
  
  let res = arr.join('');
  return res;
}

module.exports = twoComp;
