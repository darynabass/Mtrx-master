const { expect } = require('chai');
const Mtrx = require('mtrx');

describe('creation', function () {
    it('should create a random 1x1 matrix without arguments', function () {
        const m = new Mtrx();

        expect(m.rows).to.equal(1);
        expect(m.cols).to.equal(1);
        expect(m[0][0]).to.be.a('number');
        expect(m[0][0]).to.be.at.least(0);
        expect(m[0][0]).to.be.below(1);
    });

    it('should create a random 2x2 matrix with one argument', function () {
        const m = new Mtrx(2);

        expect(m.rows).to.equal(2);
        expect(m.cols).to.equal(2);

        for (let i = 0; i < m.rows; i++) {
            for (let j = 0; j < m.cols; j++) {
                expect(m[i][j]).to.be.a('number');
                expect(m[i][j]).to.be.at.least(0);
                expect(m[i][j]).to.be.below(1);
            }
        }
    });

    it('should create a random 2x3 matrix', function () {
        const m = new Mtrx(2, 3);

        expect(m.rows).to.equal(2);
        expect(m.cols).to.equal(3);

        for (let i = 0; i < m.rows; i++) {
            for (let j = 0; j < m.cols; j++) {
                expect(m[i][j]).to.be.a('number');
                expect(m[i][j]).to.be.at.least(0);
                expect(m[i][j]).to.be.below(1);
            }
        }
    });

    it('should create a matrix filled with a specified value', function () {
        const m = new Mtrx(3, 4, 9);

        expect(m).to.deep.equal([
            [9, 9, 9, 9],
            [9, 9, 9, 9],
            [9, 9, 9, 9]
        ]);
    });

    it('should create a diagonal matrix from an array', function () {
        const m = new Mtrx([2, 4, 6]);

        expect(m).to.deep.equal([
            [2, 0, 0],
            [0, 4, 0],
            [0, 0, 6]
        ]);
    });

    it('should create a matrix from a two-dimensional array', function () {
        const m = new Mtrx([[1, 2, 3], [4, 5, 6]]);

        expect(m).to.deep.equal([
            [1, 2, 3],
            [4, 5, 6]
        ]);
    });

    it('should create a matrix using a function', function () {
        const m = new Mtrx(2, 3, (i, j) => i + j);

        expect(m).to.deep.equal([
            [0, 1, 2],
            [1, 2, 3]
        ]);
    });
});