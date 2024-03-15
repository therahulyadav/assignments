/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let size = str1.length;
  let size1 = str2.length;
  let string1 = str1.toLowerCase();
  let string2 = str2.toLowerCase();
  for(let i = 0;i<size ; i++){
    let indicator = string2.indexOf(string1[i]);
    if(indicator<0){
      return false;
    }
  }
  for(let i = 0;i<size1; i++){
    let indicator = string1.indexOf(string2[i]);
    if(indicator<0){
      return false;
    }
  }
  return true;

}
module.exports = isAnagram;
