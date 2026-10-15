const { expect } = require('chai');
const Mtrx = require('mtrx');

describe( 'static_function', function () {
    it('should create a zero matrix using zeros()', function () {
        const m = Mtrx.zeros(3, 3);

        expect(m).to.deep.equal([
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ]);
    });

    it('should create a matrix of ones using ones()', function () {
        const m = Mtrx.ones(3, 4);

        expect(m).to.deep.equal([
            [1, 1, 1, 1],
            [1, 1, 1, 1],
            [1, 1, 1, 1]
        ]);
    });

    it('should create an identity matrix using eye()', function () {
        const m = Mtrx.eye(3);

        expect(m).to.deep.equal([
            [1, 0, 0],
            [0, 1, 0],
            [0, 0, 1]
        ]);
    });

    it('should create a diagonal matrix using diag()', function () {
        const m = Mtrx.diag([2, 4, 6]);

        expect(m).to.deep.equal([
            [2, 0, 0],
            [0, 4, 0],
            [0, 0, 6]
        ]);
    });

    it('should identify Mtrx objects using isMtrx()', function () {
        const array = [[0, 1, 2], [1, 2, 3]];
        const m = new Mtrx(array);

        expect(Mtrx.isMtrx(array)).to.equal(false);
        expect(Mtrx.isMtrx(m)).to.equal(true);
    });

    it('should identify matrix-like arrays using isMtrxLike()', function () {
        const array = [[0, 1, 2], [1, 2, 3]];

        expect(Mtrx.isMtrxLike(array)).to.equal(true);
    });

    it('should identify a diagonal matrix using isDiag()', function () {
        const m = new Mtrx([[0, 1, 2], [1, 2, 3]]);

        expect(Mtrx.isDiag(m)).to.equal(false);
    });

    it('should compare matrix shapes using isSameShape()', function () {
        const array = [[0, 1, 2], [1, 2, 3]];
        const m = new Mtrx(array);

        expect(Mtrx.isSameShape(m, array)).to.equal(true);
    });

    it('should add two matrices using add()', function () {
        const m = Mtrx.eye(3);
        const n = new Mtrx([
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ]);

        expect(Mtrx.add(m, n)).to.deep.equal([
            [2, 2, 3],
            [4, 6, 6],
            [7, 8, 10]
        ]);
    });

    it('should multiply a matrix by a number using mul()', function () {
        const m = Mtrx.eye(3);

        expect(Mtrx.mul(m, 3)).to.deep.equal([
            [3, 0, 0],
            [0, 3, 0],
            [0, 0, 3]
        ]);
    });

    it('should multiply two matrices using mul()', function () {
        const m = Mtrx.eye(3);
        const n = new Mtrx([
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ]);

        expect(Mtrx.mul(m, n)).to.deep.equal([
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ]);
    });

    it('should divide two matrices using div()', function () {
        const m = Mtrx.eye(3);
        const n = new Mtrx([
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ]);

        expect(Mtrx.div(n, m)).to.deep.equal([
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ]);
    });

    it('should not modify input matrices during static operations', function () {
        const m = Mtrx.eye(3);
        const n = new Mtrx([
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ]);

        const originalM = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
        const originalN = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

        Mtrx.add(m, n);
        Mtrx.mul(m, 3);
        Mtrx.mul(m, n);
        Mtrx.div(n, m);

        expect(m).to.deep.equal(originalM);
        expect(n).to.deep.equal(originalN);
    });
});
