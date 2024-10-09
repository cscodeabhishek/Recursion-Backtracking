function onetoN(n,i){
    if(i>n){
        return ;
    }
    console.log(i);
    onetoN(n ,i+1);
}
onetoN(5,1);