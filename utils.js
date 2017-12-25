
// genarr(3) => [0, 1, 2]
// genarr(5) => [0, 1, 2, ,3 ,4]
exports.genarr = n => Array.from(Array(n).keys());
// shuffle element of array .
exports.shuffle = arr => arr.sort(() => Math.random() - 0.5);

exports.randt = (n, m) => {
    var arr = utils.genarr(m);
    for (var i = 0; i < n; i++) {
        arr[Math.floor(Math.random() * m)] += 1;
    }
    return arr;
};

exports.print_rand = (arr) => {
    arr.forEach((e, i, a) => {
        console.log(`${i} ${e}`)
    });
};

const fact = n => n == 0 ? 1 : n * fact(n - 1);
exports.fact = fact;
const p = (n, r) => fact(n) / fact(n-r);
exports.p = p;
// combination
exports.comb = (n, r) => p(n, r) / fact(r);

exports.rnd = (min = 0, max = 1) => Math.floor(Math.random() * (max +1 - min) + min);