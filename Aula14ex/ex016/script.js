function contar(){
    let ini = document.getElementById('v-ini')
    let fim = document.getElementById('v-end')
    let soma = document.getElementById('sum')
    let res = document.getElementById('res')
    
    if(ini.value.length == 0){
        res.innerHTML = `Impossível contar`
        window.alert('Digite um valor de início')
        
    }
    else if(fim.value.length == 0){
        res.innerHTML = `Impossível contar`
        window.alert('Digite um valor de final')
        
    }

    else if(soma.value.length == 0){
        res.innerHTML = `Impossível contar`
        window.alert('Digite um valor de passo')
    
    }

    else if(soma.value <= 0){
        window.alert('Digite valores positivos para o passo')
    }
    else{
        res.innerHTML = `Contando: <br>`
        let i = Number(ini.value)
        let f = Number(fim.value)
        let s = Number(soma.value)

        if(s == 0){
            window.alert(`Passo inválido! Passo será considerado com valor igual a 1`)
            s = 1
        }

        //Método for
        if( i < f ){
            //Contagem crescente
            for(let c = i; c <= f; c += s){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        else{
            //Contagem descrescente
            for(let c = i; c >= f; c -= s){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
        

        /*
        //Método while
        let c = i
        while(c <= f ){
            res.innerHTML += ` ${c} `
            c += s
        }
        */

        /*
        //Método do while
        let c = i
        do{
            res.innerHTML += ` ${c} `
            c += s
        }while(c <= f)
        */



    }

    
    
}