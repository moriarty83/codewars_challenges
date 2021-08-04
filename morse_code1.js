decodeMorse = function(morseCode){
  code = morseCode.split('  ');
  decode = [];
  
  //Split the code into a separate array for each word in it.
  for (word of code){
    letters = word.split(' ')
    
    // Then go through each "letter" in each word.
    for (letter of letters){
      
      //If a letter has undefinded space, fill it in with a space.
      if(letter.length < 1)
      {
        decode.push(' ')
      }
      else
      {
        decode.push(MORSE_CODE[letter.trim()])
      }
    }
    
  }
  console.log(decode)
  return decode.join('').trim()
}