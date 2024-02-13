function decodeSignMag(str) {
    let first_arr = str.toString().split("");
    let arr = first_arr.slice(1);

    arr = arr.slice(arr.findIndex(element => element === "1"));

    let res = String(parseInt(arr.join(''), 2));

    res = first_arr[0] === "1" ? "-" + res : res;
    return res;
}
module.exports = decodeSignMag;
