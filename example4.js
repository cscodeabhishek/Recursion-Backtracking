function printArray(arr,index=0){
    if(index === arr.length)
    return;
    console.log(arr[index]);
    printArray(arr,index+1);
}
printArray([0,1,2,3,4,5]);
