function getPINs(observed) {
    return pinRecursion(observed, getDigits(observed[0]), 1)
}


function pinRecursion(observed, currentArr=[], counter=1){

    let string = observed;

    // Base Case
    if(counter === string.length){
        output = currentArr.map(String)

        return output;
    }

    // Work
    possibleDigits = getDigits(string[counter]);
    newCombos = [];
    for(digit of possibleDigits){
        if (currentArr.length > 0){
            for (current of currentArr){
                newCombos.push(current.toString()+digit.toString());
            }
        }
    }

    counter = counter + 1;

    // Recursion
    return pinRecursion(string, newCombos, counter)
}

const getDigits = (num) => {
    let digits = []
    if(+num === 0){
        digits = [8, 0];
    }
    else{
    digits = [rightButton(num), leftButton(num), topButton(num), buttomButton(num), selfButton(num)];
    }
    for(let i = digits.length - 1; i >= 0; i --){
        if(digits[i] === undefined || digits[i] === NaN){
            digits.splice(i, 1)
        }
    }
    return digits
}

const rightButton = (num)=>{
    return +num % 3 === 0 ? undefined : +num + 1
}
const leftButton = (num)=>{
    return (+num-1) % 3 === 0 ? undefined : +num === 1 ? undefined : +num-1;
} 

const topButton = (num)=>{
    return +num + 3 < 10 ? +num+3 : +num === 8 ? 0 : undefined;
}

const buttomButton = (num)=>{
    return +num - 3 > 0 ? +num-3 : +num === 0 ? 8 : undefined;
}

const selfButton = (num) =>{ return +num}

item = "80"

console.log("output: " + getPINs(item));



// describe('example tests', function() {
//     var expectations = {
//       "8": ["5", "7", "8", "9", "0"],
//       "11": ["11", "22", "44", "12", "21", "14", "41", "24", "42"],
//       "369": ["339","366","399","658","636","258","268","669","668","266","369","398","256","296","259","368","638","396","238","356","659","639","666","359","336","299","338","696","269","358","656","698","699","298","236","239"]
//     };
    
//     for (var pin in expectations) {
//       Test.assertSimilar(getPINs(pin).sort(), expectations[pin].sort(), 'PIN: ' + pin);
//     }
//   });