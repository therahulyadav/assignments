/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let start = 0;
  let end = str.length-1;
  let string = str.toLowerCase();
  while(start<end){
    if(('a'<= string[start]<='z') && ('a'<= string[end]<='z')){
      if(string[start] === string[end]){
        start++;
        end--;
      }
      else{
        return false;
      }
    }
    else if(('a' > string[start] || string[start]>'z')){
      start++;
    }
    else if(('a'> string[end]>'z')){
      end--;
    }
  }
  return true;
}
console.log(isPalindrome('hello'));
module.exports = isPalindrome;
