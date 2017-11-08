/*
    A recursive funcion is one that calls itself
    
    Running time complexity => O(n)
    
    Recursion can be used when you need to repeatedly call a certain function with altered parameters until you get a desired result.
    
    A recursive function can go infinite like a loop. To avoid infinite running of recursive function, there are two properties that a recursive function must have:
        * Base Case − There must be at least one base criteria or condition, such that, when this condition is met the function stops calling itself recursively.
        * Progressive approach − The recursive calls should progress in such a way that each time a recursive call is made it comes closer to the base criteria.
            
    Usually Recursion is more readable than a loop, but also it adds overhead because it creates a Call Stack that will be cleared only when the Base Case is hit.
    
    ---source => https://www.tutorialspoint.com/data_structures_algorithms/recursion_basics.htm
*/

'use strict';
// Example 1: calculating the factorial of a number
const factorial = function(n) {
	// base case: 
	if (n === 0) {
	    return 1;   
	}
	// recursive case:
	return n * factorial(n - 1);
}; 

console.log("The value of 0! is " + factorial(0) + "."); // 1
console.log("The value of 5! is " + factorial(5) + "."); // 120


// Example 2: Deciding if a given string is a Palindrome
// Returns the first character of the string str
const firstCharacter = function(str) {
    return str.slice(0, 1);
};

// Returns the last character of a string str
const lastCharacter = function(str) {
    return str.slice(-1);
};

// Returns the string that results from removing the first
//  and last characters from str
const middleCharacters = function(str) {
    return str.slice(1, -1);
};

const isPalindrome = function(str) {
    // base case #1
    if (str.length <= 1) {
        return true;   
    }
    // base case #2
    if (firstCharacter(str) !== lastCharacter(str)) {
        return false;
    }
    // recursive case
    return isPalindrome(middleCharacters(str));
};

console.log("Is 'a' a palindrome? => " + isPalindrome("a")); // true
console.log("Is 'rotor' a palindrome? => " + isPalindrome("rotor")); // true
console.log("Is '12321' a palindrome? => " + isPalindrome("12321")); // true
console.log("Is 'word' a palindrome? => " + isPalindrome("word")); // false
