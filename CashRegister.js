function checkCashRegister(price, cash, cid) {

    function getChange(price, cash) {
        return cash - price;
    }
    var change = getChange(price, cash).toFixed(2)
    
    function tokensInNumbers(token) {
        token[0].unshift(0.05);
        token[1].unshift(0.10);
        token[2].unshift(0.20);
        token[3].unshift(0.50);
        token[4].unshift(1);
        token[5].unshift(2);
        token[6].unshift(5);
        token[7].unshift(10);
        token[8].unshift(20);
        token[9].unshift(50);
        token[10].unshift(100);
        token[11].unshift(200);
        token[12].unshift(500);
        return token
    }
    let tokensWithNumbers = tokensInNumbers(cid)
    
    let totalCashAmount = 0;
    for (let i = 0; i < tokensWithNumbers.length; i++) {
        tokensWithNumbers[i].push(Math.round(tokensWithNumbers[i][2] / tokensWithNumbers[i][0]))
        totalCashAmount += tokensWithNumbers[i][2];
    }
    totalCashAmount = totalCashAmount.toFixed(2)
    
    var cashBack = [];
    if (change > totalCashAmount) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    } else if (change === totalCashAmount) {
        for (let i = 0; i < tokensWithNumbers.length; i++) {
            tokensWithNumbers[i].shift();
            tokensWithNumbers[i].pop();
        }
        return { status: "CLOSED", change: tokensWithNumbers }
    } else {
        for (let i = tokensWithNumbers.length - 1; i >= 0; i--) {
            while (tokensWithNumbers[i][3] > 0 && change >= tokensWithNumbers[i][0]) {
                change -= tokensWithNumbers[i][0];
                tokensWithNumbers[i][3]--;
                tokensWithNumbers[i][2] -= tokensWithNumbers[i][0];
                change = change.toFixed(2);
                cashBack.push(tokensWithNumbers[i])
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
        
        for (let i in tokensWithNumbers){ 
            tokensWithNumbers[i].shift()
            tokensWithNumbers[i].pop()
        }
        cid = tokensWithNumbers

        return { status: "OPEN", change: receiptSubArr, cid }
    }
}
console.log(checkCashRegister(19.5, 40, [["FIVE CENT", 0.20], ["TEN CENT", 0.10], ["TWENTY CENT", 0.20], ["FIFTY CENT", 0],
 ["ONE", 4], ["TWO", 2], ["FIVE", 5], ["TEN", 10], ["TWENTY", 0], ["FIFTY", 0] ,["HUNDRED", 0], ["TWO HUNDRED", 0], ["FIVE HUNDRED", 0]]))