const functionsToTest = require('./cashdesk-counter');

// TESTING getChange FUNCTION
// --------------------------

// Testing with integer
test('price of 23, cash of 40', () => {
    expect(functionsToTest.getChange(23, 40)).toBe('17.00');
});

// Testing with decimal number
test('price of 15.85, cash of 20', () => {
    expect(functionsToTest.getChange(15.85, 20)).toBe('4.15');
});

// Testing with numbers that will produce a negative result
test('price of 34.15, cash of 25', () => {
    expect(functionsToTest.getChange((34.15, 25))).toBe('-9.15');
});

// Testing with equal decimal numbers
test('price of 22.50, cash of 22.50', () => {
    expect(functionsToTest.getChange(22.50, 22.50)).toBe('0.00');
});

// TESTING tokensInNumbers FUNCTION
// --------------------------------

test('cid list with all coins aviable', () => {
    expect(functionsToTest.tokensInNumbers([["FIVE CENT", 0.20], ["TEN CENT", 0.30], ["TWENTY CENT", 0.40], ["FIFTY CENT", 0.50], 
    ["ONE", 4], ["TWO", 6], ["FIVE", 10], ["TEN", 10], ["TWENTY", 80], ["FIFTY", 150], ["HUNDRED", 200], ["TWO HUNDRED", 200], ["FIVE HUNDRED", 0]])).toEqual(
        [[0.05, "FIVE CENT", 0.20], [0.1, "TEN CENT", 0.30], [0.2, "TWENTY CENT", 0.40], [0.5, "FIFTY CENT", 0.50], 
[1, "ONE", 4], [2, "TWO", 6], [5, "FIVE", 10], [10, "TEN", 10], [20,"TWENTY", 80], [50, "FIFTY", 150], [100,"HUNDRED", 200], [200, "TWO HUNDRED", 200], [500, "FIVE HUNDRED", 0]]
    );
});

// TESTING cashDeskSum FUNCTION
// ----------------------------

// Testing with imaginary cash desk inventory 
test('counting the whole amount of cash from the cid list with added token number equivalens', () => {
    expect(functionsToTest.cashDeskSum([[0.05, "FIVE CENT", 0.20], [0.1, "TEN CENT", 0.30], [0.2, "TWENTY CENT", 0.40], [0.5, "FIFTY CENT", 0.50], 
    [1, "ONE", 4], [2, "TWO", 6], [5, "FIVE", 10], [10, "TEN", 10], [20,"TWENTY", 80], [50, "FIFTY", 150], [100,"HUNDRED", 200], [200, "TWO HUNDRED", 200], [500, "FIVE HUNDRED", 0]])).toBe(
        661.4
    );
});

// Testing with empty cash desk inventorty
test('counting the whole amount of cash from the cid list with added token number equivalents when the desk is empty', () => {
    expect(functionsToTest.cashDeskSum([[0.05, "FIVE CENT", 0], [0.1, "TEN CENT", 0], [0.2, "TWENTY CENT", 0], [0.5, "FIFTY CENT", 0], 
    [1, "ONE", 0], [2, "TWO", 0], [5, "FIVE", 0], [10, "TEN", 0], [20,"TWENTY", 0], [50, "FIFTY", 0], [100,"HUNDRED", 0], [200, "TWO HUNDRED", 0], [500, "FIVE HUNDRED", 0]])).toBe(
        0
    );
});

// TESTING numberOfCoins FUNCTION
// ------------------------------

// Testing with imaginary cash desk inventory wher the amount of 'FIVE HUNDRED' and 'ONE' is zero.
test('adds the amount of each coin type when provided with the cid list with added token number equivalents', () => {
    expect(functionsToTest.numberOfCoins([[0.05, "FIVE CENT", 0.20], [0.1, "TEN CENT", 0.30], [0.2, "TWENTY CENT", 0.40], [0.5, "FIFTY CENT", 0.50], 
    [1, "ONE", 0], [2, "TWO", 6], [5, "FIVE", 10], [10, "TEN", 10], [20,"TWENTY", 80], [50, "FIFTY", 150], [100,"HUNDRED", 200], [200, "TWO HUNDRED", 200], [500, "FIVE HUNDRED", 0]])).toEqual(
        [[0.05, "FIVE CENT", 0.20, 4], [0.1, "TEN CENT", 0.30, 3], [0.2, "TWENTY CENT", 0.40, 2], [0.5, "FIFTY CENT", 0.50, 1], 
[1, "ONE", 0, 0], [2, "TWO", 6, 3], [5, "FIVE", 10, 2], [10, "TEN", 10, 1], [20,"TWENTY", 80, 4], [50, "FIFTY", 150, 3], [100,"HUNDRED", 200, 2], [200, "TWO HUNDRED", 200,1], [500, "FIVE HUNDRED", 0, 0]]    
    );
}); 


// TESTING getSubArrays function
// -----------------------------

test('making subarrays with each one content of the array', () => {
    expect(functionsToTest.getSubArrays([1, 2, 3, 4, 5, 6], 1)).toEqual([[1], [2], [3], [4], [5], [6]]);
});

test('making subarrays with each three contents of the array', () => {
    expect(functionsToTest.getSubArrays([1, 2, 3, 4, 5, 6], 3)).toEqual([[1, 2, 3], [4, 5, 6]]);
});

test('making subarrays with each four contents of the array', () => {
    expect(functionsToTest.getSubArrays([1, 2, 3, 4, 5, 6], 4)).toEqual([[1, 2, 3, 4], [5, 6]]);
});