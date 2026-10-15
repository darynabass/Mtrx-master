const { expect } = require('chai');
const Mtrx = require('mtrx');

describe('properties', function () {
    it('should return the number of rows and columns', function () {
        const m = new Mtrx(2, 3, (i, j) => i === j ? 1 : 0);

        expect(m.rows).to.equal(2);
        expect(m.cols).to.equal(3);
        expect(m).to.deep.equal([
            [1, 0, 0],
            [0, 1, 0]
        ]);
    });

    it('should calculate the determinant of a square matrix', function () {
        const m = new Mtrx([
            [1, 2, 0],
            [3, 4, 4],
            [5, 6, 3]
        ]);

        expect(m.det).to.equal(10);
    });

    it('should return NaN for the determinant of a non-square matrix', function () {
        const m = new Mtrx(2, 3, 0);

        expect(m.det).to.be.NaN;
    });

    it('should calculate the rank of a matrix', function () {
        const m = new Mtrx(2, 3, (i, j) => i === j ? 1 : 0);

        expect(m.rank).to.equal(2);
    });

    it('should update the rank after changing an element', function () {
        const m = new Mtrx(2, 3, (i, j) => i === j ? 1 : 0);

        m[0][0] = 0;

        expect(m.rank).to.equal(1);
    });
});
