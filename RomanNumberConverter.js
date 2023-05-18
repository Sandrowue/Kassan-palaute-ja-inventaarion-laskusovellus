function convertToRoman(num) {
    var thousand = 'M';
    var fivehundert = 'D';
    var hundert = 'C';
    var fifty = 'L';
    var ten = 'X';
    var five = 'V';
    var one = 'I';
    var romanArr = [];

    var thousandResult = () => num / 1000;
    romanArr.push(thousand.repeat(Math.floor(thousandResult())))

    var fivehundertNum = () => num % 1000;
    var fivehundertResult = () => fivehundertNum() / 500;
    romanArr.push(fivehundert.repeat(Math.floor(fivehundertResult())));

    var hundertNum = () => num % 500;
    var hundertResult = () => hundertNum() / 100;
    romanArr.push(hundert.repeat(Math.floor(hundertResult())));

    var fiftyNum = () => num % 100;
    var fiftyResult = () => fiftyNum() / 50;
    romanArr.push(fifty.repeat(Math.floor(fiftyResult())));

    var tenNum = () => num % 50;
    var tenResult = () => tenNum() / 10;
    romanArr.push(ten.repeat(Math.floor(tenResult())));

    var fiveNum = () => num % 10;
    var fiveResult = () => fiveNum() / 5;
    romanArr.push(five.repeat(Math.floor(fiveResult())));

    var oneNum = () => num % 5;
    romanArr.push(one.repeat(Math.floor(oneNum())));

    var romanStr = romanArr.join("")
    var grammarRegIV = /^IIII|(?<=X)IIII|(?<=L)IIII|(?<=C)IIII|(?<=D)IIII|(?<=M)IIII/
    var grammarRegIX = /VIIII/
    var grammarRegXL = /^XXXX|(?<=C)XXXX|(?<=D)XXXX|(?<=M)XXXX/
    var grammarRegXC = /LXXXX/
    var grammarRegCD = /^CCCC|(?<=M)CCCC/
    var grammarRegCM = /DCCCC/

    return romanStr.replace(grammarRegIV, 'IV').replace(grammarRegIX, 'IX').replace(grammarRegXL, 'XL').replace(grammarRegXC, 'XC').replace(grammarRegCD, 'CD').replace(grammarRegCM, 'CM')
}

console.log(convertToRoman(15501));