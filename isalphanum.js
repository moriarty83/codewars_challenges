

function alphanumeric(string){
    const regEx = /^[0-9a-zA-Z]+$/;
    return string.match(/^[0-9a-zA-Z]+$/) !== null ? true : false;

  }

console.log(alphanumeric("PassW#0rd"))

//   In this example you have to validate if a user input 
//   string is alphanumeric. The given string is not 
//   nil/null/NULL/None, 
//   so you don't have to check that.

// describe("Tests", () => {
//     it("test", () => {
//   Test.assertEquals(alphanumeric("Mazinkaiser"), true)
//   Test.assertEquals(alphanumeric("hello world_"), false)
//   Test.assertEquals(alphanumeric("PassW0rd"), true)
//   Test.assertEquals(alphanumeric("     "), false)
//     });
//   });