function solution(inputString) {
    let half = inputString.length / 2;
    let firstHalf = inputString.slice(0, half);
    let secondHalf = inputString.slice(half);
    return firstHalf === secondHalf;
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test isTandemRepeat

// alternative solution
