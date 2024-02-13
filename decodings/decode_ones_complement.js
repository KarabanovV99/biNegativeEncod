function decodeOneComp(str) {
    let arr = str.split("");

    if (arr[0] === "1") {
        arr = arr.map(num => num === "0" ? "1" : "0");
    }

    arr = arr.slice(arr.findIndex(element => element === "1"));

    let res = String(parseInt(arr.join(''), 2));
    res = str[0] === "1" ? "-" + res : res;
    return res;
}

module.exports = decodeOneComp;
