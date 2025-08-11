function palindrome (str) {
    str = str.toLowerCase().replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s/g, '')
     for (let i=0, j=str.length-1;i<=j;i++,j--)
        if (str.charAt(i) !== str.charAt(j)) {       
            return false;
        }
    return true;
};

console.log(palindrome("Racecar !"))