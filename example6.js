// exponentials
function powerCal(n,m){
    if(m===0){
        return 1;
    }
    if(m===1){
    return n;
    }
    const halfPower = powerCal(n, Math.floor(m/2));
    if(m %2===2){
        return halfPower *halfPower;
    }else{
        return halfPower *halfPower*n;
    }
}
console.log(powerCal(2,3));