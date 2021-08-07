function solution(str){
   let strArr = []
   if(str.length>0)
   {
      strArr = str.match(/.{1,2}/g)
      console.log(strArr[strArr.length-1].length)
      if(strArr[strArr.length-1].length < 2){
         strArr[strArr.length-1] = strArr[strArr.length-1] + "_";
      }
   }
   return strArr;
}

console.log(solution("abcdef"))//, ["ab", "cd", "ef"]));
console.log(solution("abcdefg"))//, ["ab", "cd", "ef", "g_"]));
console.log(solution(""))//, []);