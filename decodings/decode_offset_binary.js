function decodeOffBin(str, subtractValue) {
  let res = String(parseInt(str, 2));
  return res - subtractValue;
}

module.exports = decodeOffBin;
