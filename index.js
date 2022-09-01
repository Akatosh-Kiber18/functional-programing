const _ = require('lodash');
const fp = require('lodash/fp');

const figures = [
    {
        color: "red",
        width: 5,
        height: 5,
    },
    {
        color: "red",
        width: 3,
        height: 5,
    },
    {
        color: "red",
        width: 3,
        height: 4,
    },
    {
        color: "purple",
        width: 4,
        height: 2,
    },
    {
        color: "golden",
        width: 2,
        height: 2,
    },
    {
        color: "black",
        width: 9,
        height: 9,
    },
    {
        color: "black",
        width: 4,
        height: 4,
    },
    {
        color: "fuchsia",
        width: 7,
        height: 7,
    },
    {
        color: "Violet",
        width: 6,
        height: 6,
    },
]

const isSquare = r => r.width === r.height;
const isRectangle = r => r.width !== r.height;
const calcArea = r => r.width * r.height;
const calcPerimeter = r => (r.width + r.height) * 2;
const isRed = r => r.color === "red";
const isBlack = r => r.color === "black";

const myFilter = predicate => arr => arr.filter(predicate);
const myMap = mapper => arr => arr.map(mapper);
const mySum = arr => arr.reduce((a, e) => a + e, 0);

const totalPerimeter = _.flow(
    myFilter(isRed),
    myFilter(isRectangle),
    myMap(calcPerimeter),
    mySum
)(figures);

const totalAreaOfSquares = _.flow(
    fp.filter(isBlack),
    fp.filter(isSquare),
    fp.map(calcArea),
    fp.max
)(figures)

console.log(totalPerimeter);
