function getPINs(observed) {
    options = (observed.split('')).map(x => getDigits(+x));
    console.log("options: ", options)
}

const getDigits = (num) => {
    return [rightButton(num), leftButton(num), topButton(num), buttomButton(num), selfButton(num)]
}

const rightButton = (num)=>{
    return +num % 3 === 0 ? undefined : +num + 1

}
const leftButton = (num)=>{
    return +num % 4 === 0 ? undefined : +num === 1 ? undefined : +num-1;
} 

const topButton = (num)=>{
    return +num + 3 < 10 ? +num+3 : +num === 8 ? 0 : undefined;
}

const buttomButton = (num)=>{
    return +num - 3 > 0 ? +num-3 : +num === 0 ? 8 : undefined;
}

const selfButton = (num) =>{ return +num}
console.log(getPINs("51"))



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