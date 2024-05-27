const functionsToTest = require('./cashdesk-counter');

// Testing get Change function with negative result
console.log('result ' + functionsToTest.getChange(34.15, 25));

// Testing to console.log tokensInNumbers function
console.log('result ' + functionsToTest.tokensInNumbers([["FIVE CENT", 0.20], ["TEN CENT", 0.30], ["TWENTY CENT", 0.40], ["FIFTY CENT", 0.50], 
["ONE", 4], ["TWO", 6], ["FIVE", 10], ["TEN", 10], ["TWENTY", 80], ["FIFTY", 150], ["HUNDRED", 200], ["TWO HUNDRED", 200], ["FIVE HUNDRED", 0]]))