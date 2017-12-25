var utils = require('./utils');
var fs = require('fs');

// 線形検索・リニアサーチ
function linear_search(arr, searchNumber) {
    const LEN = arr.length;
    var index = -1;
    for (var i = 0, len = arr.length; i < len; i++) {
        if (arr[i] === searchNumber) {
            index = i;
            break;
        }
    }
    return index === -1 ? index : arr[i];
}

// バイナリーサーチ
function binary_search(arr, searchNumber) {
    let left = 0;
    let right = arr.length - 1;
    let index = -1;

    while (left <= right) {
        let middle = Math.floor((left + right) / 2);
        if (arr[middle] === searchNumber) {
            index = middle;
            console.log('found')
            break;
        } else if (arr[middle] < searchNumber) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    return index === -1 ? index : arr[index];
}

const COUNT = 2000000;
var arr = utils.shuffle(utils.genarr(COUNT));
var searchNumber = utils.rnd(0, arr.length);
console.log(`検索する値: ${searchNumber}`);
var s1 = 'リニアサーチ';
console.time(s1);
let ret = linear_search(arr, searchNumber);
console.log(`結果: ${ret}`)
console.timeEnd(s1);

var s2 = 'binary search';
console.time(s2);
var arr2 = arr.sort((a, b) => a - b);
let ret2 = binary_search(arr2, searchNumber);
console.log(`結果: ${ret2}`)
console.timeEnd(s2);
