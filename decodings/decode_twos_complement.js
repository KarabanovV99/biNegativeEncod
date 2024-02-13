function decodeTwoComp(str) {
  let arr = str.split("");
  
  if (arr[0] === "1") {
    for (var i = arr.length - 1; i >= 0; i--) {
      if (arr[i] === '1') {
        arr[i] = '0';
        break;
      } else {
        arr[i] = '1';
      }
    }

    if (i < 0) {
      arr.shift();
    }

    arr = arr.map(num => num === "0" ? "1" : "0");
  }
  
  arr = arr.slice(arr.findIndex(element => element === "1"));
  
  let res = parseInt(arr.join(''), 2);
  
  res = str[0] === "1" ? "-" + res : res;
  
  return res;
}

module.exports = decodeTwoComp;
