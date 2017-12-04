function esPrimo(num){
    i=2
    while (i<num){
        if(num%i==0){
            return false;
        }
    i++;
    }
    return true;
}