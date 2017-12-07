describe('utils', () => {
    var utils;
    beforeEach(() => utils = require('../utils'));

    it('genarr(5).lenght == 5', () => {
        console.assert(utils.genarr(5).length === 5)
    });

    it ('shuffle([1,2])', () => {
        console.assert(utils.shuffle([1,2]).length === 2);
    });

    it ('randt', () => {

    });

    it ('print_randt', () => {
        //console.assert(utils.print_randt);
    });

    it ('factorial 5 === 120', () => {
        console.assert(utils.fact(5) === 120);
    });

    it ('p(6,6)==720', () => {
        console.assert(utils.p(6,6) === 720);
    });
    it ('comb(5,3)==10', () => {
        console.assert(utils.comb(5,3) === 10);
    });
    it ('comb(5,3)==comb(5,2)', () => {
        console.assert(utils.comb(5,3) === utils.comb(5,2));
    });

})