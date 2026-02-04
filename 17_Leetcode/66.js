
var plusOne = function(digits){
    let carry = 1;
    for(var i=digits.length-1; i>=0; i--){
        let sum = digits[i] + carry;
        digits[i] = sum % 10;
        carry = Math.floor(sum / 10);
    }
    if(carry > 0){
        digits.unshift(carry);
    }
    console.log(digits);
    return digits;
}
plusOne([9,9,9])
