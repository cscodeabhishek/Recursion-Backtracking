function func(n){
 if(n<=1)
    return n;
else
return 3*func(n-2)+func(n-1);
}
console.log(func(4));
//op is 7


function f(n) {
    if (n <= 0) {
        return;
    }
    console.log(n); // Log before the recursive call
    f(n - 1);       // Reduce n to avoid infinite recursion
    console.log(n); // Log after the recursive call
}
f(5);
// op 
// 5
// 4
// 3
// 2
// 1
// 1
// 2
// 3
// 4
// 5
