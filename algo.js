utils = require('./utils');


let ar = utils.randt(10000, 100);
utils.print_rand(ar);

console.log('----------');
for (var n = 0; n < 8; n++) {
    let s = '';
    for (var m = 0; m <= n; m++) {
        s = s + " " + utils.comb(n, m);
    }
    console.log(s);
}

