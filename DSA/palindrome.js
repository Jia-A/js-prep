console.log("Palindrome Check");

class PalindromeCheck {

    isAlphaNumeric(char){
        return ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9') || (char >= "A" && char <= "Z")) 
    }

    isPalindrome(str){
       let newStr = ""

       for(let char of str){
        if(this.isAlphaNumeric(char)){
            newStr += char.toLowerCase();
        }
       } 

       return newStr === newStr.split("").reverse().join("")

    }

    isPalindrome2(str){
        let left = 0, right = str.length - 1;
        while(left < right){
            while(left < right && !this.isAlphaNumeric([str[left]])) left++;
            while(left < right && !this.isAlphaNumeric([str[right]])) right--;

            if(str[left].toLowerCase() !== str[right].toLowerCase()) return false;
            left++;
            right--;
        }
        return true;
    }
}

const palindromeCheck = new PalindromeCheck();
console.log(palindromeCheck.isPalindrome("r___999a5ceca999r"));
console.log(palindromeCheck.isPalindrome2("o__!!1lpl1****o"));
console.log(palindromeCheck.isPalindrome2("madam"));
console.log("--------------------------");