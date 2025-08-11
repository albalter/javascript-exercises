/* Pseudocode 
    1.strip all punctuation signs and spaces from 
    the string, since they don't count as a symbol
    for the purpose of testing our function.
    2. convert the string to lowercase
    3. iterate over the string, first comparing 
    the first and last character, then 2nd and 
    last -1, etc. the condition of termination is
    when the indexes being compared meet in the middle
    Initially, assume the string to be a palindrome, 
    but if at any stage the comparison fails, break
    out fo the cycle and return from function with false.
    Otherwise, return true.
    end.
*/
const palindromes = function (str) {
    str = str.toLowerCase().replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s/g, '')
    for (let i=0, j=str.length-1;i<=j;i++,j--)
        if (str.charAt(i) !== str.charAt(j)) {       
            return false;
        }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
