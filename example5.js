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

function funct(n){
    if(n<=1){
    return ;
    }
    funct(n-1);
    console.log(3*n);
    funct(n-2);
    console.log(2*~n);
}
funct(4);
// op 6
// -6
// 9
// -8
// 12
// 6
// -6
// -10

// reverse array 
function reversedFunc(array, left=0,right=array.length-1){
    if(left>=right){
    return;
    }
    // swap logic
    const temp =array[left];
    array[left]=array[right];
    array[right]=temp;
    reversedFunc(array,left +1, right-1);
}
const array= [1,2,3,4,5,4];
reversedFunc(array);
console.log(array);


function palindromecheck(str,left=0,right=str.length-1){
    if(left>=right){
        return true;
    }
    if(str[left]!==str[right]){
        return false;
    }
    return palindromecheck(str,left +1, right-1);
}
console.log(palindromecheck("abba"));