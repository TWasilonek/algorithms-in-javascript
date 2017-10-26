/*
    Selection sort is a simple sorting algorithm
    
    Running time complexity => O(n2)
    
    This sorting algorithm is an in-place comparison-based algorithm in which the list is divided into two parts, 
    the sorted part at the left end and the unsorted part at the right end. 
    
    Initially, the sorted part is empty and the unsorted part is the entire list.
    The smallest element is selected from the unsorted array and swapped with the leftmost element, 
    and that element becomes a part of the sorted array. 
    
    This process continues moving unsorted array boundary by one element to the right.
    
    ---source => https://www.tutorialspoint.com/data_structures_algorithms/selection_sort_algorithm.htm
    
    Drawback - this algorithm is slow and has a quadratic runnng time which makes it very slow with larger inputs.
*/

'use strict';

// this function finds the smallest number
function findSmallest(arr) {
    // initial smallest number and smallestIndex set to the beginning of the list
    let smallest = arr[0];
    let smallestIndex = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
            smallestIndex = i;
        }
    }
    
    return smallestIndex;
}

// this function does the selection sort itself
function doSelectionSort(arr) {
    // 1. Create an empty list that will hold the sorted result and cache the initail array lenght
    const max = arr.length;
    let result = [];
    
    // 2. itereate over the passad array until the array is empty
    for (let i = 0; i < max; i++) {
        let index = findSmallest(arr);
        // 3. on each iteration delete the current smallest value from the input table and pass it to the last index of the result table
        result.push(arr.splice(index, 1)[0]);
    }

    return result;  
}
   
            

// list of unsorted numbers:
const unsorted_numbers = [10, 5, 8, -2, 11, 100, 29, 31, 6, 8, 10, 12, 17, 1, 99, 72, 86];

const sorted_numbers = doSelectionSort(unsorted_numbers);
console.log(sorted_numbers);    // => [ -2, 1, 5, 6, 8, 8, 10, 10, 11, 12, 17, 29, 31, 72, 86, 99, 100 ]



