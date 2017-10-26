/* 
    Binary Search is a simple algorithm for quick seraching of sorted lists.
    
    Running time complexity => O(log n)
    
    The easiest way to explain a binary search is through a game Guess the Number.
    Think of a number between 1 and 100. Now the computer must guess which number you chose.
    The first approach that the computer can take is Linear Search - that means it will be going through each number from 1 to 100 ONE BY ONE.
    Each time it will prompt you to check if this is the number you guessed. 
    
    This will eventually lead to the computer guessing your number of choice, but in the worst case the computer will need 100 guesses, which is not very efficient.
    
    
    BINARY SEARCH to the solution
    To optimize this algorithm, you need to do the following steps:
        1. Make sure that you are working on a sorted list
        2. Set variables: min = 1 and max = chosen maximum number
        3. Guess the average of max and min, rounded down so that it is an integer.
        4. If you guessed the number, stop
        5. if guess was too high, set max to be guess - 1
        6. If guess was too low, set min to be guess + 1
        7. Go back to step 3
*/

'use strict';

// Linear Search
class LinearSearch {
    constructor (max) {
        this.max = 0;
        this.min = 1;
        this.numberOfOperations = 0;
    }
    
    setMax(num) {
        if (num < this.min) {
            console.log(`Maximum number must be higher than ${this.min}`);
            return;
        } else {
            this.max = num;
        }
    }
    
    guessTheNumber(chosenNumber) {
        if (this.max < 1) {
            this.max = 100;
        }
        
        for (let i = this.min; i <= this.max; i++) {
            this.numberOfOperations++;
            
            if (i === chosenNumber) {
                console.log(`FOUND! You chose ${i}`);
                console.log(`TOTAL OPERATIONS: ${this.numberOfOperations}`);
                return;
            }
            
            console.log(`${i} is not your choice`);
        }
    }
}


// Binary Search
class BinarySearch {
    constructor () {
        this.max = 100;
        this.min = 1;
        this.numberOfOperations = 0;
    }
    
    setMax(num) {
        if (num < this.min) {
            console.log(`Maximum number must be higher than ${this.min}`);
            return;
        } else {
            this.max = num;
        }
    }
    
    guessTheNumber(chosenNumber) {
        // 1. Make sure that you are working on a sorted list
        // I will be counting from 1 to max, which (for simplicity) I will set to a positive number provided by the user or fall it back to 100.
 
        // 2. Set variables: min = 1 and max = chosen maximum number
        let min = this.min;
        let max = this.max;
        let guess;
        
        while (max >= min) {
            this.numberOfOperations++;
            
            // 3. Guess the average of max and min, rounded down so that it is an integer.
            guess = Math.floor((min + max)/2);
            
            // 4. If you guessed the number, stop
            if (guess === chosenNumber) {
                console.log(`FOUND! You chose ${guess}`);
                console.log(`TOTAL OPERATIONS: ${this.numberOfOperations}`);
                return;
            }
            
            // 5. if guess was too high, set max to be guess - 1
            else if (guess > chosenNumber) {
                max = guess - 1;
            } 
            
            // 6. If guess was too low, set min to be guess + 1
            else {
                min = guess + 1;
            }
            
            console.log(`${guess} is not your choice`);
            
            // 7. Go back to step 3
        }
        
        console.log(`Your guess was not found`);
        return -1;
    }
    
}


// PLAY GUESS THE NUMBER
const chosenNumber = 25;

const linearSearchExample = new LinearSearch();
linearSearchExample.setMax(100);
linearSearchExample.guessTheNumber(chosenNumber);
// =>  Total operations: 25

const binarySearchExample = new BinarySearch();
binarySearchExample.setMax(100);
binarySearchExample.guessTheNumber(chosenNumber);
// => Total operations: 2