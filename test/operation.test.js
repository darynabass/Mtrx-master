const { expect } = require('chai');
const Mtrx = require('mtrx');

describe('operation', function () {
    it('should create a zero matrix', function () {
        const m = new Mtrx(2, 3, 0);

        expect(m).to.deep.equal([
            [0, 0, 0],
            [0, 0, 0]
        ]);
    });

    it('should read an element using array indexing', function () {
        const m = new Mtrx(2, 3, 0);

        expect(m[1][1]).to.equal(0);
    });

    it('should read an element using get()', function () {
        const m = new Mtrx(2, 3, 0);

        expect(m.get(1, 1)).to.equal(0);
    });

    it('should update an element using array indexing', function () {
        const m = new Mtrx(2, 3, 0);

        m[0][1] = 1;

        expect(m).to.deep.equal([
            [0, 1, 0],
            [0, 0, 0]
        ]);
    });

    it('should update an element using set()', function () {
        const m = new Mtrx(2, 3, 0);

        m.set(0, 1, 1);

        expect(m).to.deep.equal([
            [0, 1, 0],
            [0, 0, 0]
        ]);
    });
});
