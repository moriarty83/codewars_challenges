
function duplicateCount(text){
    text = text.toLowerCase().split('').sort();
    console.log(text);
    let counter = 1;
    let dupChar = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] == text[i+1])
        {
            counter += 1;
            
        }
        else
        {
            if(counter > 1)
            {
                dupChar += 1;
            }
            counter = 1;
        }
    }
    return dupChar;
}
  

duplicateCount("aaBBCC")//, 0);
// duplicateCount("abcde")//, 0);
// duplicateCount("aabbcde")//, 2);
// duplicateCount("aabBcde")//, 2,"should ignore case");
// duplicateCount("Indivisibility")//, 1)
// duplicateCount("Indivisibilities")//, 2, "characters may not be adjacent"