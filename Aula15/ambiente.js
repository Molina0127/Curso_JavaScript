let num = [4, 3, 2, 3, 1]
num[5] = 7
num.push(9)


console.log(`O vetor tem ${num.length} posições`)
console.log('')

for(var i = 0; i < num.length; i++){
    var p = i+1
    console.log(`O ${p}° valor do array num localizado na chave ${i} é igual a ${num[i]}`)
}

console.log('')
console.log('O vetor organizado de maneira crescente ficaria assim:')
console.log('')

num.sort()
for(var i = 0; i < num.length; i++){
    var p = i+1
    console.log(`O ${p}° valor do array num localizado na chave ${i} é igual a ${num[i]}`)
}

console.log('')
console.log('O vetor organizado de maneira descrescente ficaria assim:')
console.log('')

var p = 0

for(var i = num.length-1; i >= 0; i--){
    var po = p+1
    console.log(`O ${po}° valor do array num localizado na chave ${p} é igual a ${num[i]}`)
    p++

}