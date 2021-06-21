function fatorial(num){
    var i = num
    var res = 1
    for(i; i > 1; --i){
         res *= num
        --num

    }
    return res    
}

console.log(fatorial(1))