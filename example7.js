// find max of the array
function findMaxRecursive(arr, n) {
    // Base case: if the array has only one element
    if (n == 1) {
        return arr[0];
    }

    // Recursive call: find the maximum in the remaining array
    return Math.max(arr[n - 1], findMaxRecursive(arr, n - 1));
}

let arr = [1, 2, 5, 7];
console.log(findMaxRecursive(arr, arr.length)); // Output: 7

//Using Math.max() and Spread Operator:
let arry = [1, 2, 5, 7];
console.log(Math.max(...arry)); // Output: 7

//Iterative Approach:
function findMaxIterative(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

let arryy = [1, 2, 5, 7];
console.log(findMaxIterative(arryy)); // Output: 7

// Using reduce() method:

let arri = [1, 2, 5, 7];
let max = arri.reduce((acc, val) => acc > val ? acc : val);
console.log(max); // Output: 7


// Sorting Method:
let arrie = [1, 2, 5, 7];
arrie.sort((a, b) => b - a);
console.log(arr[0]); // Output: 7
