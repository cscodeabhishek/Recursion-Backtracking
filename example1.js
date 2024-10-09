// Recursion:
// Recursion is when a function calls itself until a base condition is met.
// The function keeps calling itself to solve the problem.

function printNto1(n) {
    if (n === 0) { // This base condition stops when n is 0 or negative
        return;
    }
    console.log(n); // Print the current value of n
    printNto1(n - 1); // Recursive call, decreasing n by 1 each time
}

printNto1(5); // Start from 5 and print down to 1
// output
5
4
3
2
1
