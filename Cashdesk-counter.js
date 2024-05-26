// HELPER FUNCTIONS OF THE PROGRAM

//  GetChange counts how much cash to return to the customer by subtract the price of the bought items from the received cash.
// It also converts the result with toFixed to a string with two decimals to prevent floating-point errors.
function getChange(price, cash) {
    change = cash - price
    return change.toFixed(2)
}

// Adds to cid argument array the value of each coin in numbers at the beginning of each sub array,
// which is needed in further processing.
function tokensInNumbers(token) {
    var listOfTokens = {
        'FIVE HUNDRED': 500,
        'TWO HUNDRED': 200,
        'HUNDRED': 100,
        'FIFTY': 50,
        'TWENTY': 20,
        'TEN': 10,
        'FIVE': 5,
        'TWO': 2,
        'ONE': 1,
        'FIFTY CENT': 0.50,
        'TWENTY CENT': 0.20,
        'TEN CENT': 0.10,
        'FIVE CENT': 0.05
    }

    for (let i = 0; i < token.length; i++) {
        if (token[i][0] in listOfTokens) {
            token[i].unshift(listOfTokens[token[i][0]])
        }
    }
    return token
}

// function counts the total Sum of Cash in the desk from the cid array reworked in the tokensInNumbers function as argument.
function cashDeskSum(inventory) {
    let sum = 0;
    for (let i = 0; i < inventory.length; i++) {
        sum += inventory[i][2];
        }
        return sum
    }

// provided with the tokensWithNumbers Array as argument the function adds to each tokens subArray the amount of coins at the end of this subArray.
function numberOfCoins(inventory) {
    for (let i = 0; i < inventory.length; i++) {
        inventory[i].push(Math.round(inventory[i][2] / inventory[i][0]))    
    }
    return inventory
}

// This function makse an array with subArrays out of a simple Array
// It takes as arguments the Array you want to change and the numer of items in the array, that are packed into one sub array.
function getSubArrays(arr, subSize) {
    let result = [];
    for (let i = 0; i < arr.length; i += subSize) {
        let sub = arr.slice(i, i + subSize);
        result.push(sub);
    }
    return result
}

// Function showAccount counts and shows final results status, change and cid if needed in object. 
// It should be called with the objects change, totalCashAmount and tokensWithAmountOfCoins.
function showAccount(change, cashSum, inventory) {
    var cashBack = [];
    
    // This if statement checks if the change to give to the customer is the same as the whole cash sum in the cash desk.
    // If this is the case it returns the status 'CLOSED' and the change, which is the whole sum of the cash desk. 
    // Because the desk is now empty no new cid is provided
    if (change === cashSum) {
        for (let i = 0; i < inventory.length; i++) {
            inventory[i].shift();
        }
        return { status: "CLOSED", change: inventory }
    } 
    
    
    /*else if (change > totalCashAmount) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }  
    */ 
   
   // Beginning with the biggest token that is aviable in the inventory, this else statement checks, 
   // if the change to give is bigger then that token. If it is, this token is subtracted from the change
   // and added to cashBack list. Then it moves to the next smaller token.
   else {
       for (let i = inventory.length - 1; i >= 0; i--) {
           while (inventory[i][3] > 0 && change >= inventory[i][0]) {
               change -= inventory[i][0];
               inventory[i][3]--;
               sumNumber = inventory[i][2] 
               subtractor = inventory[i][0];
               sumNumber -= subtractor
               inventory[i][2] = Number(sumNumber.toFixed(2))
               change = change.toFixed(2);
               cashBack.push(inventory[i])
            }
        }
    }
    
    
    // If the change is still bigger than 0, it means either, that the total amount of cash is smaller
    // then the change to return, or that the aviable tokens don't match for the change.
    // The status returns 'INSUFFICIENT_FUNDS' with an empty change.
    if (change > 0) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
    
    
    // When the change is not bigger than 0, this else statement will return a status of open 
    // and process the amount of change to give back, and the invontory (cid) left in the cash desk.
    else {
        var appearanceOfTokens = {
            'FIVE HUNDRED': 0,
            'TWO HUNDRED': 0,
            'HUNDRED': 0,
            'FIFTY': 0,
            'TWENTY': 0,
            'TEN': 0,
            'FIVE': 0,
            'TWO': 0,
            'ONE': 0,
            'FIFTY CENT': 0,
            'TWENTY CENT': 0,
            'TEN CENT': 0,
            'FIVE CENT': 0
        }
        
    // console.log(cashBack);
    
    // This loop adds to the appearanceOfTokens object the amount of every token in the cashBack list.
    for (let i = 0; i < cashBack.length; i++) {
        if (cashBack[i][1] in appearanceOfTokens) {
            appearanceOfTokens[cashBack[i][1]] += cashBack[i][0]
        }
    }
    
    // Receipt list is initated empty.
    // forEach iterates through cashBack list and adds every tokenname string that appears to the receipt list
    let receipt = [];
    cashBack.forEach((arr) => {
        if (!receipt.includes(arr[1])) {
            receipt.push(arr[1]);
        }
    });
    
    // In the receiptSubArr variable the receipt list is changed into a array with subArrays of each currency
    // The number of subSize is set to one.
    let receiptSubArr = getSubArrays(receipt, 1);
    
    // With use of the updatet appearance of Tokens object this loop adds the amount to return 
    // to the end of each sub array of the receiptSubArr list
    for (let i = 0; i < receiptSubArr.length; i++) {
        if (receiptSubArr[i] in appearanceOfTokens) {
            receiptSubArr[i].push(appearanceOfTokens[receiptSubArr[i]])
        }
    }
    
    // By calling the tokensInNumbers function with receiptSubArr as Argument 
    // the number equivalent to the string name is added to the beginning of each subArray.
    tokensInNumbers(receiptSubArr)
    
    // In this for loop first the string 'Amount of token:' is added to the end of each subArray of receiptSubArr.
    // Then the actual amount of token is added as a number afer been calculated as a division.
    // Finally the number equivalent for the token name is removed, after the division is done and ther is no more need for it.
    for (let i = 0; i < receiptSubArr.length; i++) {
        receiptSubArr[i].push('Amount of token: ')
        receiptSubArr[i].push(Math.round(receiptSubArr[i][2] / receiptSubArr[i][0]))
        receiptSubArr[i].shift()
    }
        
    for (let i in inventory){ 
        inventory[i].shift()
        inventory[i].pop()
    }
    
    var cid = inventory

    return console.log({ status: "OPEN", change: receiptSubArr, cid })
    }

}

// checkCashRegister function takes as arguments the price of the bought items,
// the amount of cash that the customer gives to pay the items
// and the inventory of cash in the desk (cid).
// The inventory must be a list with subArrays that include the coin names in capital stringform and the total amount of cash for each coin in number form.

// The function returns the status of the cash register, which is 'OPEN', 'CLOSED' or 'INSUFFICIENT_FUNDS',
// the change to return to the customer from the cash register
// and the new inventory of the cash in the desk (cid).
function checkCashRegister(price, cash, cid) {
   
    // variable change calls the get change function 
    var change = getChange(price, cash)
    
    // variable tokensWithNumber calls the tokensInNumbers function with the providen cid argument.
    var tokensWithNumbers = tokensInNumbers(cid)

    // variable totalCashAmount calls the cashDeskSum function with the tokensWithNumbers Variable
    var totalCashAmount = cashDeskSum(tokensWithNumbers).toFixed(2)

    // calls the numberOfCoins function with tokensWithNumbers as argument
    var tokensWithAmountOfCoins = numberOfCoins(tokensWithNumbers)
    
    // This variable calls the showAccount function with the variables change, totalCashAmount and tokensWithAmountOfCoins.
    var account = showAccount(change, totalCashAmount, tokensWithAmountOfCoins);
    return account
}

checkCashRegister(122.35, 200, [["FIVE CENT", 0.30], ["TEN CENT", 0.50], ["TWENTY CENT", 0.80], ["FIFTY CENT", 4], 
["ONE", 5], ["TWO", 6], ["FIVE", 5], ["TEN", 80], ["TWENTY", 60], ["FIFTY", 0], ["HUNDRED", 0], ["TWO HUNDRED", 0], ["FIVE HUNDRED", 0]])


module.exports = {
    getChange,
    tokensInNumbers,
    cashDeskSum,
    numberOfCoins,
    getSubArrays,
    showAccount
}