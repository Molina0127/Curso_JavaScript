function parimpar(n){
    if (n %2 == 0){
        return 'par'
    }
    else{
        return 'impar'
    }
}

let num = parimpar(4)

console.log(`O número é ${num}`)