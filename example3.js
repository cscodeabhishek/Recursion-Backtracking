//Factorial
// 4!= 4x3x2x1=24 
function Factorial(n) {
    if (n === 0 || n === 1) {
        return 1;  // Base case: Factorial of 0 or 1 is 1
    }
    return n * Factorial(n - 1);  // Recursive case
}

const ans = Factorial(4);
console.log(ans);
