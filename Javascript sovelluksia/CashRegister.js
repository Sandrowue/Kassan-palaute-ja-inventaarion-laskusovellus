// checkCashRegister function takes as arguments the price of the bought items,
// the amount of cash that the customer gives to pay the items
// and the inventory of cash in the desk (cid).

// The function returns the status of the cash register, which is 'OPEN', 'CLOSED' or 'INSUFFICIENT_FUNDS',
// the change to return to the customer from the cash register
// and the new inventory of the cash in the desk (cid).

function checkCashRegister(price, cash, cid) {

    //  GetChange counts how much cash to return to the customer by subtract the price of the bought items from the received cash.
    function getChange(price, cash) {
        return cash - price;
    }
    
    // variable change calls the get change function 
    // and converts it with toFixed to a string with two decimals to prevent floating-point errors.
    var change = getChange(price, cash).toFixed(2)
    
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

    // variable tokensWithNumber calls the tokensInNumbers function with the providen cid argument.
    var tokensWithNumbers = tokensInNumbers(cid)
    
    
    let totalCashAmount = 0;
    
    for (let i = 0; i < tokensWithNumbers.length; i++) {
        tokensWithNumbers[i].push(Math.round(tokensWithNumbers[i][2] / tokensWithNumbers[i][0]))
        totalCashAmount += tokensWithNumbers[i][2];
    }
    totalCashAmount = totalCashAmount.toFixed(2)
    console.log(totalCashAmount)

    
    var cashBack = [];
    
    /*if (change > totalCashAmount) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
   }  
    else */ 
    
    if (change === totalCashAmount) {
        for (let i = 0; i < tokensWithNumbers.length; i++) {
            tokensWithNumbers[i].shift();
            tokensWithNumbers[i].pop();
        }
        return { status: "CLOSED", change: tokensWithNumbers }
    } 
    else {
        for (let i = tokensWithNumbers.length - 1; i >= 0; i--) {
            while (tokensWithNumbers[i][3] > 0 && change >= tokensWithNumbers[i][0]) {
                change -= tokensWithNumbers[i][0];
                tokensWithNumbers[i][3]--;
                sumNumber = tokensWithNumbers[i][2] 
                substractor = tokensWithNumbers[i][0];
                sumNumber -= substractor
                tokensWithNumbers[i][2] = Number(sumNumber.toFixed(2))
                change = change.toFixed(2);
                cashBack.push(tokensWithNumbers[i])
            }
        }
    }

        if (change > 0) {
            return { status: "INSUFFICIENT_FUNDS", change: [] };
        }
        
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
        
        for (let i = 0; i < cashBack.length; i++) {
            if (cashBack[i][1] in appearanceOfTokens) {
                appearanceOfTokens[cashBack[i][1]] += cashBack[i][0]
            }
        }
        
        let receipt = [];
        cashBack.forEach((arr) => {
            if (!receipt.includes(arr[1])) {
                receipt.push(arr[1]);
            }
        });
        
        function getSubArrays(arr, subSize) {
            let result = [];
            for (let i = 0; i < arr.length; i += subSize) {
                let sub = arr.slice(i, i + subSize);
                result.push(sub);
            }
            return result
        }
        let receiptSubArr = getSubArrays(receipt, 1);
        
        for (let i = 0; i < receiptSubArr.length; i++) {
            if (receiptSubArr[i] in appearanceOfTokens) {
                receiptSubArr[i].push(appearanceOfTokens[receiptSubArr[i]])
            }
        }
        
        tokensInNumbers(receiptSubArr)
        
        for (let i = 0; i < receiptSubArr.length; i++) {
            receiptSubArr[i].push('Amount of token: ')
            receiptSubArr[i].push(Math.round(receiptSubArr[i][2] / receiptSubArr[i][0]))
            receiptSubArr[i].shift()
        }
        
        let newCid = tokensWithNumbers

        for (let i in newCid){ 
            newCid[i].shift()
            newCid[i].pop()
        }
        cid = newCid

        return console.log({ status: "OPEN", change: receiptSubArr, cid })
    }

checkCashRegister(63.75, 120, [["FIVE CENT", 0.30], ["TEN CENT", 0.50], ["TWENTY CENT", 0.80], ["FIFTY CENT", 4], 
["ONE", 5], ["TWO", 6], ["FIVE", 5], ["TEN", 80], ["TWENTY", 60], ["FIFTY", 0], ["HUNDRED", 0], ["TWO HUNDRED", 0], ["FIVE HUNDRED", 0]])