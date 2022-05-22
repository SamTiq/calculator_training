function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

var value1 = getRandomInt(100);
var value2 = getRandomInt(100);

console.log(value1, value2);

var pValue1 = document.getElementById("value1");
var pValue2 = document.getElementById("value2");

pValue1.textContent = value1;
pValue2.textContent = value2;

var solution = value1 * value2;

function displaySolution(){
    var pSolution = document.getElementById("solution");
    pSolution.textContent = solution;
}