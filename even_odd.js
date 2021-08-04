//A funtion to idenify the lone even or odd in a String of numbers.
//Then return which number (1st, 2nd, etc) in the set it is.
function iqTest(numbers){
    //Turn the string into an array.
    array = numbers.split(" ");

    //array for the index of odds and evens
    let evens = [];
    let odds = [];

    for (let i = 0; i < array.length; i++) 
    {
        array[i] = parseInt(array[i]);
        x = array[i];
        if(Number.isInteger(x) && x%2 == 0)
        {
            evens.push(i+1);
        }
        if(Number.isInteger(x) && x%2 == 1)
        {
            odds.push(i+1);
        }
    }

    if (evens.length == 1)
    {   
        return evens[0];
    }
    if (odds.length == 1)
    {
        return odds[0];
    }    
}

console.log(iqTest("1 2 2"))
console.log(iqTest("1 2 1 1"))
console.log(iqTest("2 4 7 8 10"))