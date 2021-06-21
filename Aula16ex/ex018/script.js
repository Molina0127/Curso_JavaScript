    let sel = document.getElementById('selnum')
    let num = document.querySelector('input#num')
    let res = document.querySelector('div#res')
    let lista = []
    //res.innerHTML += `${n[i]}<br>`

    
    function isNumero(n){
        if(Number(n) >= 1 && Number(n) <= 100){
            return true
        }
        else{
            return false
        }
    }

    
    function inLista(n, l){
        if(l.indexOf(Number(n)) != -1){
            return true
        }
        else{
            return false
        }
    }

    function adicionar(){
        
        
        if(isNumero(num.value) && !inLista(num.value, lista)){

            
            /*lista += [Number(num.value)]
            var i = 0
            */

            lista.push(Number(num.value))

            var item = document.createElement('option')
            item.text = `Valor ${num.value} foi adicionado`
            sel.appendChild(item)
            res.innerHTML = ''

            //i++
        }
        else{
            window.alert(`Valor inválido ou já encontrado na lista`)
        }

        num.value = ''
        num.focus()        

    }


    function finalizar(){
        if (lista.length == 0){
            window.alert(`Adicione algum valor antes de finalizar`)
        }

        else{
            
            let tot = lista.length
            res.innerHTML = ''
            res.innerHTML += `Você adicionou ${tot} elementos<br>`
            
            let soma = 0
            let media = 0 
            
            let maior = lista[0]
            let menor = lista[0]

            for(let pos in lista){
                soma += lista[pos]
                if(lista[pos] > maior){
                    maior = lista[pos]
                }
                if(lista[pos] < menor){
                    menor = lista[pos]
                }
            }

            media = soma / tot

            res.innerHTML += `O menor valor adicionado foi ${menor}<br>`
            res.innerHTML += `O maior valor adicionado foi ${maior}<br>`
            res.innerHTML += `A soma dos valores adicionados é igual a ${soma}<br>`
            res.innerHTML += `A media dos valores adicionados é igual a ${media}<br>`

        }
        
    }

    /*window.alert(n[i])
    i++*/

/*
function adicionar(){
   
    var n = [Number(num.value)]
    let i = 0
    

    

    var item = document.createElement('option')
    item.text = `Valor ${n[i]} foi adicionado`
    sel.appendChild(item)

    //res.innerHTML += `${n[i]}<br>`
    
    
    

    window.alert(n[i])
    
    var receber =+ [n]
    res.innerHTML += `${receber}<br>`

    i++

    
    
}*/





