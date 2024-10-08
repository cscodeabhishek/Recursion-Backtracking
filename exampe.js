// Recursion:
// Recusrion is when a function calling itself until a base condition is met.
// function keep callling itself to solve the probem

function printNto1(n){
    if(n===5){ // here we are setting the base condition so the stack wont get overflow// if you can give base condition compiler print it till -9065 then give error of stackoverFlow
    return;
    }
    console.log(n);
    printNto1(n-1);
}
printNto1(5);