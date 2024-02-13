function offBin(bit, str) {
  let sdv = 2 ** (bit - 1);
  let int = parseInt(str, 10);
  bit = parseInt(bit);
  
  if (bit < 0) {
    return "The number of allocated bits cannot be negative.";
  } else if (int < -sdv || int > sdv - 1) {
    return "The length of the number representation exceeds the number of bits allocated for it.";
  }
  
  let res = (int + sdv).toString(2);
  
  res = "0".repeat(bit - res.length) + res;
  
  return res;
}

module.exports = offBin;
